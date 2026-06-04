from unittest.mock import AsyncMock, MagicMock

import pytest

from app.websocket.manager import ConnectionManager


@pytest.fixture
def manager():
    mgr = ConnectionManager()
    mgr.sio = MagicMock()
    mgr.sio.emit = AsyncMock()
    return mgr


@pytest.mark.asyncio
class TestWebRTCHandling:
    """Tests for WebRTC signal handling in ConnectionManager."""

    async def test_handle_webrtc_offer(self, manager):
        """Test that WebRTC offers are relayed to the target peer with correct arguments."""
        sid = "sender_123"
        data = {
            "target_sid": "target_456",
            "sdp": "v=0\r\no=- 12345 12345 IN IP4 127.0.0.1\r\n...",
            "sender_id": 789,
        }

        await manager.handle_webrtc_offer(sid, data)

        manager.sio.emit.assert_called_once_with(
            "offer",
            {"sdp": data["sdp"], "sender_sid": sid, "sender_id": data["sender_id"]},
            room=data["target_sid"],
        )

    async def test_handle_webrtc_offer_no_target_sid(self, manager):
        """Test that WebRTC offers without a target_sid are handled gracefully (ignored)."""
        sid = "sender_123"
        data = {
            "sdp": "v=0\r\no=- 12345 12345 IN IP4 127.0.0.1\r\n...",
            "sender_id": 789,
        }

        await manager.handle_webrtc_offer(sid, data)

        manager.sio.emit.assert_not_called()

    async def test_handle_webrtc_offer_missing_sender_id(self, manager):
        """Test that WebRTC offers without a sender_id are still relayed with None."""
        sid = "sender_123"
        data = {
            "target_sid": "target_456",
            "sdp": "v=0\r\no=- 12345 12345 IN IP4 127.0.0.1\r\n...",
        }

        await manager.handle_webrtc_offer(sid, data)

        manager.sio.emit.assert_called_once_with(
            "offer",
            {"sdp": data["sdp"], "sender_sid": sid, "sender_id": None},
            room=data["target_sid"],
        )

    async def test_handle_webrtc_offer_missing_sdp(self, manager):
        """Test that WebRTC offers missing sdp raise a KeyError."""
        sid = "sender_123"
        data = {"target_sid": "target_456", "sender_id": 789}

        with pytest.raises(KeyError, match="sdp"):
            await manager.handle_webrtc_offer(sid, data)

        manager.sio.emit.assert_not_called()

    async def test_handle_webrtc_answer(self, manager):
        """Test that WebRTC answers are relayed to the target peer."""
        sid = "sender_123"
        data = {
            "target_sid": "target_456",
            "sdp": "v=0\r\no=- 12345 12345 IN IP4 127.0.0.1\r\n...",
        }

        await manager.handle_webrtc_answer(sid, data)

        manager.sio.emit.assert_called_once_with(
            "answer", {"sdp": data["sdp"], "sender_sid": sid}, room=data["target_sid"]
        )

    async def test_handle_ice_candidate(self, manager):
        """Test that ICE candidates are relayed to the target peer."""
        sid = "sender_123"
        data = {
            "target_sid": "target_456",
            "candidate": {
                "candidate": "candidate:1 1 UDP 2130706431",
                "sdpMid": "0",
                "sdpMLineIndex": 0,
            },
        }

        await manager.handle_ice_candidate(sid, data)

        manager.sio.emit.assert_called_once_with(
            "ice_candidate",
            {"candidate": data["candidate"], "sender_sid": sid},
            room=data["target_sid"],
        )

    async def test_handle_join_video_room(self, manager):
        """Test user joining a video room broadcasts user_joined."""
        sid = "sid_123"
        room_id = "room_456"
        user_id = 789

        manager.sio.enter_room = AsyncMock()
        await manager.handle_join_video_room(sid, room_id, user_id)

        manager.sio.enter_room.assert_called_once_with(sid, room_id)
        manager.sio.emit.assert_called_once_with(
            "user_joined", {"user_id": user_id, "sid": sid}, room=room_id, skip_sid=sid
        )

    async def test_handle_leave_video_room(self, manager):
        """Test user leaving a video room broadcasts user_left."""
        sid = "sid_123"
        room_id = "room_456"
        user_id = 789

        manager.sio.leave_room = AsyncMock()
        await manager.handle_leave_video_room(sid, room_id, user_id)

        manager.sio.leave_room.assert_called_once_with(sid, room_id)
        manager.sio.emit.assert_called_once_with(
            "user_left", {"user_id": user_id, "sid": sid}, room=room_id
        )


class TestConnectionManagement:
    """Tests for basic connection management."""

    def test_get_user_room(self, manager):
        """Test user room generation."""
        assert manager.get_user_room(123) == "user_123"

    @pytest.mark.asyncio
    async def test_connect(self, manager):
        """Test user connection."""
        sid = "sid_123"
        user_id = 456

        manager.sio.enter_room = AsyncMock()
        await manager.connect(sid, user_id)

        # Check tracking
        assert user_id in manager.active_connections
        assert sid in manager.active_connections[user_id]

        # Check Socket.IO calls
        manager.sio.enter_room.assert_called_once_with(sid, f"user_{user_id}")
        manager.sio.emit.assert_called_once_with(
            "connected", {"user_id": user_id}, room=sid
        )

    @pytest.mark.asyncio
    async def test_disconnect(self, manager):
        """Test user disconnection."""
        sid = "sid_123"
        user_id = 456

        # Setup initial connection
        manager.active_connections[user_id] = {sid, "other_sid"}
        manager.sio.leave_room = AsyncMock()

        await manager.disconnect(sid, user_id)

        # Check tracking updated
        assert sid not in manager.active_connections[user_id]
        assert "other_sid" in manager.active_connections[user_id]

        # Check Socket.IO calls
        manager.sio.leave_room.assert_called_once_with(sid, f"user_{user_id}")

    @pytest.mark.asyncio
    async def test_disconnect_last_session(self, manager):
        """Test user disconnection when it's their last session."""
        sid = "sid_123"
        user_id = 456

        # Setup initial connection
        manager.active_connections[user_id] = {sid}
        manager.sio.leave_room = AsyncMock()

        await manager.disconnect(sid, user_id)

        # Check tracking removed entirely
        assert user_id not in manager.active_connections

        # Check Socket.IO calls
        manager.sio.leave_room.assert_called_once_with(sid, f"user_{user_id}")


class TestConnectionState:
    """Tests for connection state management."""

    def test_is_user_connected(self, manager):
        """Test checking if user is connected."""
        user_id = 123

        # Not connected initially
        assert manager.is_user_connected(user_id) is False

        # Connected
        manager.active_connections[user_id] = {"sid_123"}
        assert manager.is_user_connected(user_id) is True

        # Empty connections set
        manager.active_connections[user_id] = set()
        assert manager.is_user_connected(user_id) is False

    def test_get_connected_users_count(self, manager):
        """Test getting total connected users count."""
        assert manager.get_connected_users_count() == 0

        manager.active_connections[1] = {"sid_1"}
        manager.active_connections[2] = {"sid_2"}
        assert manager.get_connected_users_count() == 2


class TestNotificationManagement:
    """Tests for sending notifications via the manager."""

    @pytest.mark.asyncio
    async def test_send_notification_to_user(self, manager):
        """Test sending a notification to a specific user."""
        user_id = 123
        notification_data = {"message": "Hello!"}

        await manager.send_notification_to_user(user_id, notification_data)

        manager.sio.emit.assert_called_once_with(
            "new_notification", notification_data, room=f"user_{user_id}"
        )

    @pytest.mark.asyncio
    async def test_send_personal_message(self, manager):
        """Test sending a personal message to a specific user."""
        user_id = 123
        message_data = {"message": "Hello!"}

        await manager.send_personal_message(user_id, message_data)

        manager.sio.emit.assert_called_once_with(
            "new_message", message_data, room=f"user_{user_id}"
        )

    @pytest.mark.asyncio
    async def test_broadcast_to_users(self, manager):
        """Test broadcasting a notification to multiple users."""
        user_ids = [123, 456]
        notification_data = {"message": "Hello to all!"}

        manager.send_notification_to_user = AsyncMock()

        await manager.broadcast_to_users(user_ids, notification_data)

        assert manager.send_notification_to_user.call_count == 2
        manager.send_notification_to_user.assert_any_call(123, notification_data)
        manager.send_notification_to_user.assert_any_call(456, notification_data)

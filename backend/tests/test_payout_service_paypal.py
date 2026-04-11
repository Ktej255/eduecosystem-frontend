from decimal import Decimal
from unittest.mock import AsyncMock, patch

import pytest

from app.services.payout_service import PayoutService


@pytest.mark.asyncio
async def test_process_paypal_payout_success():
    # Arrange
    paypal_email = "instructor@example.com"
    amount = Decimal("100.50")

    # Mock the create_payout_async method of the paypal_service
    expected_batch_id = "BATCH_123456"
    mock_response = {
        "batch_header": {
            "payout_batch_id": expected_batch_id,
            "batch_status": "PENDING",
        }
    }

    with patch(
        "app.services.payout_service.paypal_service.create_payout_async",
        new_callable=AsyncMock,
    ) as mock_create_payout:
        mock_create_payout.return_value = mock_response

        # Act
        result = await PayoutService._process_paypal_payout(
            paypal_email, amount
        )

        # Assert
        assert result == expected_batch_id
        mock_create_payout.assert_called_once_with(
            receiver_email=paypal_email, amount=amount
        )


@pytest.mark.asyncio
async def test_process_paypal_payout_fallback_batch_id():
    # Arrange
    paypal_email = "instructor@example.com"
    amount = Decimal("100.50")

    # Mock response without batch_id
    mock_response = {"status": "SUCCESS"}

    with patch(
        "app.services.payout_service.paypal_service.create_payout_async",
        new_callable=AsyncMock,
    ) as mock_create_payout:
        mock_create_payout.return_value = mock_response

        # Act
        result = await PayoutService._process_paypal_payout(
            paypal_email, amount
        )

        # Assert
        assert result.startswith("PAYPAL_")
        mock_create_payout.assert_called_once_with(
            receiver_email=paypal_email, amount=amount
        )


@pytest.mark.asyncio
async def test_process_paypal_payout_failure():
    # Arrange
    paypal_email = "instructor@example.com"
    amount = Decimal("100.50")

    # Mock create_payout_async to raise an exception
    with patch(
        "app.services.payout_service.paypal_service.create_payout_async",
        new_callable=AsyncMock,
    ) as mock_create_payout:
        mock_create_payout.side_effect = Exception("API Error")

        # Act & Assert
        with pytest.raises(Exception, match="API Error"):
            await PayoutService._process_paypal_payout(paypal_email, amount)

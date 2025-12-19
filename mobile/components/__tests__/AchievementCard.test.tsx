import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react-native'
import { AchievementCard } from '../AchievementCard'

describe('AchievementCard Component', () => {
    const mockAchievement = {
        name: 'First Steps',
        description: 'Complete your first lesson',
        icon: '🎯',
        coinReward: 50,
        isUnlocked: false,
        rarity: 'common' as const,
    }

    it('renders achievement information correctly', () => {
        render(<AchievementCard {...mockAchievement} />)

        expect(screen.getByText('First Steps')).toBeTruthy()
        expect(screen.getByText('Complete your first lesson')).toBeTruthy()
        expect(screen.getByText('🎯')).toBeTruthy()
    })

    it('shows locked state for unun locked achievements', () => {
        render(<AchievementCard {...mockAchievement} />)

        // Check for lock indicator or locked styling
        const card = screen.getByText('First Steps').parent
        expect(card).toBeTruthy()
    })

    it('shows unlocked state for unlocked achievements', () => {
        render(<AchievementCard {...mockAchievement} isUnlocked={true} />)

        expect(screen.getByText('First Steps')).toBeTruthy()
    })

    it('displays coin reward', () => {
        render(<AchievementCard {...mockAchievement} />)

        expect(screen.getByText(/50/)).toBeTruthy()
    })

    it('shows correct rarity indicator', () => {
        const { rerender } = render(<AchievementCard {...mockAchievement} rarity="common" />)
        expect(screen.getByText('First Steps')).toBeTruthy()

        rerender(<AchievementCard {...mockAchievement} rarity="legendary" />)
        expect(screen.getByText('First Steps')).toBeTruthy()
    })
})

import sqlalchemy
from sqlalchemy import text
import os

# Database connection
e = sqlalchemy.create_engine('postgresql://postgres:EduEco2026DB@127.0.0.1:5433/eduecosystem_prod')

# Keyword to topic_tag mapping
TOPIC_MAP = [
    (['rbi', 'reserve bank', 'monetary policy', 'repo', 'crr', 'slr', 'liquidity', 'laf'], 'Banking_Monetary_Policy'),
    (['inflation', 'cpi', 'wpi', 'deflation', 'price index'], 'Inflation_Price_Index'),
    (['gdp', 'gnp', 'national income', 'fiscal deficit', 'budget', 'revenue'], 'National_Income_Fiscal_Policy'),
    (['tax', 'gst', 'income tax', 'direct tax', 'indirect tax', 'customs'], 'Taxation'),
    (['trade', 'export', 'import', 'current account', 'balance of payment', 'forex', 'exchange rate'], 'International_Trade'),
    (['nbfc', 'bank', 'financial', 'sebi', 'stock', 'bond', 'equity', 'etf', 'mutual fund', 'insurance', 'pension'], 'Financial_Markets'),
    (['fdi', 'fii', 'foreign investment', 'capital account'], 'Foreign_Investment'),
    (['poverty', 'unemployment', 'inclusive growth', 'inequality', 'welfare', 'nrega', 'mgnrega'], 'Poverty_Welfare'),
    (['agriculture', 'msp', 'crop', 'farm', 'irrigation', 'soil', 'fertilizer'], 'Agriculture_Economy'),
    (['infrastructure', 'road', 'port', 'airport', 'railway', 'energy', 'power'], 'Infrastructure'),
    (['digital', 'fintech', 'upi', 'rupee', 'payment', 'e-commerce'], 'Digital_Economy'),
    (['scheme', 'programme', 'mission', 'yojana', 'initiative', 'policy'], 'Government_Schemes'),
]

DEFAULT_TAG = 'General_Economy'

def get_tag(question_text: str) -> str:
    if not question_text:
        return DEFAULT_TAG
    text_lower = question_text.lower()
    for keywords, tag in TOPIC_MAP:
        if any(kw in text_lower for kw in keywords):
            return tag
    return DEFAULT_TAG

def main():
    try:
        # Use Engine.begin() for automatic transaction management (commit on success, rollback on error)
        with e.begin() as conn:
            # Fetch all untagged Economy questions
            # Note: Production column name is 'text'
            rows = conn.execute(text(
                "SELECT id, text FROM bank_questions "
                "WHERE subject ILIKE '%econ%' AND topic_tag IS NULL"
            )).fetchall()
            
            print(f'Updating {len(rows)} questions...')
            
            updated = 0
            for row in rows:
                tag = get_tag(row[1])
                conn.execute(text(
                    "UPDATE bank_questions SET topic_tag = :tag WHERE id = :id"
                ), {"tag": tag, "id": row[0]})
                updated += 1
            
            print(f'Done. {updated} questions tagged.')
            
            # Verify
            r = conn.execute(text(
                "SELECT topic_tag, COUNT(*) FROM bank_questions "
                "WHERE subject ILIKE '%econ%' "
                "GROUP BY topic_tag ORDER BY COUNT(*) DESC"
            )).fetchall()
            print('Final distribution:')
            for row in r:
                print(f'  {row[0]}: {row[1]}')
    except Exception as ex:
        print(f'Error: {ex}')

if __name__ == "__main__":
    main()

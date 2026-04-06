import sqlite3
import json

c = sqlite3.connect('d:\\Development\\EduEcosystem\\backend\\eduecosystem_v2.db')
cursor = c.cursor()

# Get total nodes
cursor.execute("SELECT count(*) FROM concept_nodes WHERE subject_slug='polity'")
print('Total Polity Nodes:', cursor.fetchone()[0])

# Get nodes with 370
cursor.execute("SELECT node_name, prerequisite_nodes FROM concept_nodes WHERE subject_slug='polity' AND node_name LIKE '%370%'")
print('Checking 370 linkages:')
for row in cursor.fetchall():
    print(row)


import json

d = json.load(open('final_audit_v2.json'))
print(f"Total: {d['total']}")
print(f"Gap: {d['gap']}")

under = [(k,v) for k,v in d['chapters'].items() if v['total'] < 90]
print(f"Under chapters: {len(under)}")
for k,v in under:
    print(f"  T{k}: L1={v['l1']} L2={v['l2']} L3={v['l3']} Total={v['total']}")

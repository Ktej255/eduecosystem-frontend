import re
import sys

file_path = r"d:\MasterSoftware\sarit-graphotherapy\frontend\src\components\graphotherapy\FunnelWizard.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace Step 2
step2_old = """                            onClick={async () => {
                                // Save lead to backend
                                try {"""
step2_new = """                            onClick={async () => {
                                // Save to localStorage
                                localStorage.setItem("grapho_lead_email", formData.email);
                                localStorage.setItem("grapho_lead_name", formData.name);
                                localStorage.setItem("grapho_concern", formData.address || "General");

                                // Save lead to backend
                                try {"""
content = content.replace(step2_old, step2_new)

# Replace Step 4
step4_old = """                            if (typeof window !== 'undefined') {
                                // @ts-ignore
                                window.uploadedGraphologyFile = uploadedFiles[0];
                            }

                            router.push('/graphotherapy/graphotherapy/funnel/analysis');"""
step4_new = """                            if (typeof window !== 'undefined') {
                                // @ts-ignore
                                window.uploadedGraphologyFile = uploadedFiles[0];
                                
                                try {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        try {
                                            localStorage.setItem("grapho_image_url", reader.result as string);
                                        } catch(e) {
                                            console.warn("localStorage quota exceeded");
                                        }
                                        router.push('/graphotherapy/graphotherapy/funnel/processing');
                                    };
                                    reader.readAsDataURL(uploadedFiles[0]);
                                } catch (e) {
                                    router.push('/graphotherapy/graphotherapy/funnel/processing');
                                }
                            } else {
                                router.push('/graphotherapy/graphotherapy/funnel/processing');
                            }"""
content = content.replace(step4_old, step4_new)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Done")

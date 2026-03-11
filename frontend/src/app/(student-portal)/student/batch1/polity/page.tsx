"use client";

import PolityHome from "@/components/batch1/polity/PolityHome";
import SubjectAccessGate from "@/components/common/SubjectAccessGate";

export default function PolityPage() {
    return (
        <SubjectAccessGate subject="polity">
            <PolityHome />
        </SubjectAccessGate>
    );
}

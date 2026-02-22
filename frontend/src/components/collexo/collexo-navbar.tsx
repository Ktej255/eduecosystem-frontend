'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Menu,
    X,
    ChevronDown,
    CreditCard,
    Banknote,
    RefreshCw,
    CreditCard as CardIcon,
    Calendar
} from 'lucide-react';

const products = [
    { name: 'Collect', description: 'Multiple payment modes', icon: CreditCard, href: '/saritclasses-crm/collect' },
    { name: 'EMI', description: 'Flexible payment solutions', icon: Banknote, href: '/saritclasses-crm/emi' },
    { name: 'AutoDebit', description: 'Auto-debit subscriptions', icon: RefreshCw, href: '/saritclasses-crm/autodebit' },
    { name: 'Pixi', description: 'All-in-one student card', icon: CardIcon, href: '/saritclasses-crm/pixi' },
];

export default function CollexoNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-card/80/80 backdrop-blur-md border-b border-border">
            <nav className="collexo-container flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/saritclasses-crm" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl collexo-gradient flex items-center justify-center">
                        <span className="text-white font-bold text-xl">S</span>
                    </div>
                    <span className="text-2xl font-bold collexo-gradient-text">SaritClasses</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {/* Products Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setProductsOpen(!productsOpen)}
                            className="flex items-center gap-1 text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                        >
                            Products
                            <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {productsOpen && (
                            <div className="absolute top-full left-0 mt-2 w-72 bg-card rounded-xl shadow-xl border border-border p-2">
                                {products.map((product) => (
                                    <Link
                                        key={product.name}
                                        href={product.href}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted dark:hover:bg-slate-800 transition-colors"
                                        onClick={() => setProductsOpen(false)}
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                                            <product.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-foreground">{product.name}</div>
                                            <div className="text-sm text-muted-foreground dark:text-muted-foreground">{product.description}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link
                        href="#central"
                        className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                    >
                        Platform
                    </Link>
                    <Link
                        href="#security"
                        className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                    >
                        Security
                    </Link>
                    <Link
                        href="#stakeholders"
                        className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                    >
                        Solutions
                    </Link>
                </div>

                {/* CTA Button */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="collexo-btn-primary">
                        <Calendar className="w-4 h-4" />
                        Schedule a Demo
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-muted-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-card border-t border-border">
                    <div className="p-4 space-y-4">
                        <div className="space-y-2">
                            <div className="font-semibold text-foreground px-3">Products</div>
                            {products.map((product) => (
                                <Link
                                    key={product.name}
                                    href={product.href}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted dark:hover:bg-slate-800 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <product.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                    <span className="text-muted-foreground">{product.name}</span>
                                </Link>
                            ))}
                        </div>
                        <div className="border-t border-border pt-4 space-y-2">
                            <Link
                                href="#central"
                                className="block px-3 py-2 text-muted-foreground"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Platform
                            </Link>
                            <Link
                                href="#security"
                                className="block px-3 py-2 text-muted-foreground"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Security
                            </Link>
                            <Link
                                href="#stakeholders"
                                className="block px-3 py-2 text-muted-foreground"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Solutions
                            </Link>
                        </div>
                        <button className="collexo-btn-primary w-full justify-center">
                            <Calendar className="w-4 h-4" />
                            Schedule a Demo
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

"use client";

import supabase from "@/lib/supabase";
import { AuthError, Provider, Session, User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<{
    session: Session | null;
    user: User | null;
    loading: boolean;
    error: AuthError | null;
    signInWithEmail: (email: string, password: string) => Promise<void>;
    signUpWithEmail: (email: string, password: string) => Promise<void>;
    signInWithProvider: (provider: Provider) => Promise<void>;
    signOut: () => Promise<void>;
}>({
    session: null,
    user: null,
    loading: true,
    error: null,
    signInWithEmail: async () => {},
    signUpWithEmail: async () => {},
    signInWithProvider: async () => {},
    signOut: async () => {},
});

export const AuthProvider = ({ children }: any) => {
    const [session, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AuthError | null>(null);

    useEffect(() => {
        const setData = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();
            if (error) {
                setError(error);
                return;
            }
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        }

        const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        });

        setData();

        return () => {
            listener?.subscription.unsubscribe();
        }
    }, []);

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(null);
            }, 3000);
        }
    }, [error]);

    const signInWithEmail = async (email: string, password: string) => {
        const  { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) setError(error);
    }

    const signUpWithEmail = async (email: string, password: string) => {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) setError(error);
    }

    const signInWithProvider = async (provider: Provider) => {
        const { error } = await supabase.auth.signInWithOAuth({ provider });
        if (error) setError(error);
    }

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) setError(error);
    }

    const value = {
        session,
        user,
        loading,
        error,
        signInWithEmail,
        signUpWithEmail,
        signInWithProvider,
        signOut,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
    

'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type Nivel = 'junior' | 'explorador' | 'elite';

export interface UserProfile {
  nombre: string;
  nivel: Nivel;
}

interface ProfileContextValue {
  profile: UserProfile | null;
  hidratado: boolean;
  guardarProfile: (p: UserProfile) => void;
  borrarProfile: () => void;
}

const STORAGE_KEY = 'carmen_mexico_profile_v1';

const ProfileContext = createContext<ProfileContextValue | null>(null);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [hidratado, setHidratado] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setProfile(JSON.parse(raw) as UserProfile);
    } catch {}
    setHidratado(true);
  }, []);

  const guardarProfile = useCallback((p: UserProfile) => {
    setProfile(p);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch {}
  }, []);

  const borrarProfile = useCallback(() => {
    setProfile(null);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, hidratado, guardarProfile, borrarProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error('useProfile debe usarse dentro de ProfileProvider');
  return ctx;
}

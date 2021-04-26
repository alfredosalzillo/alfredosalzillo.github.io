import { useDeno } from 'framework/react';

export const useEnv = () => useDeno(() => Deno.env.toObject())

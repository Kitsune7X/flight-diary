import { Visibility, Weather } from './types.js';
import * as z from 'zod';
export declare const NewEntrySchema: z.ZodObject<{
    weather: z.ZodEnum<typeof Weather>;
    visibility: z.ZodEnum<typeof Visibility>;
    date: z.ZodISODate;
    comment: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=utils.d.ts.map
import { Visibility, Weather } from './types.js';
import * as z from 'zod';
export const NewEntrySchema = z.object({
    weather: z.enum(Weather),
    visibility: z.enum(Visibility),
    date: z.iso.date(),
    comment: z.string().optional(),
});
//# sourceMappingURL=utils.js.map
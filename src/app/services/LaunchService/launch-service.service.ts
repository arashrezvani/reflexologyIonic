import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class LaunchServiceService {
  async increaseLaunchCount(): Promise<number> {
      const { identifier } = await Device.getId(); // گرفتن شناسه یکتا دستگاه

      const key = `launchCount_${identifier}`; // شمارنده مخصوص این دستگاه
      const { value } = await Preferences.get({ key });

      let count = value ? parseInt(value, 10) : 0;
      count++;

      await Preferences.set({
        key,
        value: count.toString(),
      });

      return count;
    }
}

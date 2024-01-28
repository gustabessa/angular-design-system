import { Injectable, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({ providedIn: 'root' })
export class MediaService {
  constructor(private readonly breakpointObserver: BreakpointObserver) {}

  small = toSignal(this.breakpointObserver.observe(Breakpoints.Small));

  xsmall = toSignal(this.breakpointObserver.observe(Breakpoints.XSmall));

  isMobile = computed(() => this.small()?.matches || this.xsmall()?.matches);
}

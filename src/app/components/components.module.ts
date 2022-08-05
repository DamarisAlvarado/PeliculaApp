import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowposterComponent } from './slideshowposter/slideshowposter.component';
import { SlidesparesComponent } from './slidespares/slidespares.component';
import { DetalleComponent } from './detalle/detalle.component';




@NgModule({

  declarations: [
    SlideshowBackdropComponent,SlideshowposterComponent,
    SlidesparesComponent,DetalleComponent],
  exports:[SlideshowBackdropComponent,
    SlideshowposterComponent,SlidesparesComponent,
  DetalleComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }

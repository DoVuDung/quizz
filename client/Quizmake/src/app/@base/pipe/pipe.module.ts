import { NgModule } from '@angular/core';
import { VnMoney,FullName } from './pipe.custom';

@NgModule({
    imports: [],
    declarations: [VnMoney,FullName],
    exports: [VnMoney,FullName],
})

export class CustomPipeModule {

    static forRoot() {
        return {
            ngModule: CustomPipeModule,
            providers: [],
        };
    }
} 
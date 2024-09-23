import { NgModule } from "@angular/core";
import { SafeUrlPipe } from "./safe-url.pipe";
import { StripHtmlTagPipe } from "./stripHtmlTag.pipe";
import { ConvertSecondDurationPipe } from "./convertSecondDuration.pipe";

@NgModule({
    declarations: [
        SafeUrlPipe,
        StripHtmlTagPipe,
        ConvertSecondDurationPipe
    ],
    imports: [],
    exports: [
        SafeUrlPipe,
        StripHtmlTagPipe,
        ConvertSecondDurationPipe
    ],
})
export class SharePipeModule {}
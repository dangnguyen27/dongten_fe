import { NgModule } from "@angular/core";
import { SafeUrlPipe } from "./safe-url.pipe";
import { StripHtmlTagPipe } from "./stripHtmlTag.pipe";
import { ConvertSecondDurationPipe } from "./convertSecondDuration.pipe";
import { DateAgoPipe } from "./date-ago.pipe";

@NgModule({
    declarations: [
        SafeUrlPipe,
        StripHtmlTagPipe,
        ConvertSecondDurationPipe,
        DateAgoPipe
    ],
    imports: [],
    exports: [
        SafeUrlPipe,
        StripHtmlTagPipe,
        ConvertSecondDurationPipe,
        DateAgoPipe
    ],
})
export class SharePipeModule {}
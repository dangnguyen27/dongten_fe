import { NgModule } from "@angular/core";
import { SafeUrlPipe } from "./safe-url.pipe";
import { StripHtmlTagPipe } from "./stripHtmlTag.pipe";
import { ConvertSecondDurationPipe } from "./convertSecondDuration.pipe";
import { DateAgoPipe } from "./date-ago.pipe";
import { FormatDatePipe } from "./formatDate.pipe";
import { GetJsonValuePipe } from "./getJsonValue.pipe";

@NgModule({
    declarations: [
        SafeUrlPipe,
        StripHtmlTagPipe,
        ConvertSecondDurationPipe,
        DateAgoPipe,
        FormatDatePipe,
        GetJsonValuePipe
    ],
    imports: [],
    exports: [
        SafeUrlPipe,
        StripHtmlTagPipe,
        ConvertSecondDurationPipe,
        DateAgoPipe,
        FormatDatePipe,
        GetJsonValuePipe
    ],
})
export class SharePipeModule {}
import { topmost } from "ui/frame";
import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import * as platform from "platform";

declare var UIImage: any;
declare var UIBarMetrics: any;

export function onLoaded(args: EventData) {
    let page = <Page>args.object;

    if (platform.isIOS) {
        var navigationBar = topmost().ios.controller.navigationBar;
        navigationBar.barStyle = 1;
        navigationBar.translucent = false;
        navigationBar.setBackgroundImageForBarMetrics(UIImage.new(), UIBarMetrics.Default);
        navigationBar.shadowImage = UIImage.new();
    }
}

export function goToPage() {
    topmost().navigate({
        moduleName: "main-page",
        transition: {
            name: "flip",
            duration: 380
        }
    });
}
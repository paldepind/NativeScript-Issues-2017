"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var platform_1 = require("platform");
var screenScale;
var scroll;
// Event handler for Page "navigatingTo" event attached in main-page.xml
function onPageLoaded(args) {
    var page = args.object;
    var stack = page.getViewById("stack");
    scroll = page.getViewById("scroll");
    screenScale = platform_1.screen.mainScreen.scale;
    console.log("screenScale; " + screenScale);
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.onPageLoaded = onPageLoaded;
function onStackLoaded(args) {
    var stack = args.object;
    setTimeout(function () {
        console.log("stack.getMeasuredHeight: " + stack.getMeasuredHeight());
        console.log("stack.getMeasuredWidth: " + stack.getMeasuredWidth());
        var heightDP = stack.getMeasuredHeight() / screenScale;
        var widthDP = stack.getMeasuredWidth() / screenScale;
        console.log("heightDP: " + heightDP);
        console.log("widthDP: " + widthDP);
        scroll.scrollToVerticalOffset(heightDP / 2); // will scroll to 1000DP (as the total height is 2000)
    }, 100);
}
exports.onStackLoaded = onStackLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscURBQW9EO0FBR3BELHFDQUFpRDtBQUNqRCxJQUFJLFdBQVcsQ0FBQztBQUNoQixJQUFJLE1BQU0sQ0FBQztBQUVYLHdFQUF3RTtBQUN4RSxzQkFBNkIsSUFBZTtJQUN4QyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTdCLElBQUksS0FBSyxHQUFnQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELE1BQU0sR0FBZSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWhELFdBQVcsR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFFM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNoRCxDQUFDO0FBVkQsb0NBVUM7QUFFRCx1QkFBOEIsSUFBZTtJQUN6QyxJQUFJLEtBQUssR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUVyQyxVQUFVLENBQUM7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7UUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBRW5FLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLFdBQVcsQ0FBQztRQUN2RCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxXQUFXLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFFbkMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNEQUFzRDtJQUNyRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDWixDQUFDO0FBZEQsc0NBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgSGVsbG9Xb3JsZE1vZGVsIH0gZnJvbSAnLi9tYWluLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IFNjcm9sbFZpZXcgfSBmcm9tIFwidWkvc2Nyb2xsLXZpZXdcIjtcbmltcG9ydCB7IHNjcmVlbiwgU2NyZWVuTWV0cmljcyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xubGV0IHNjcmVlblNjYWxlO1xubGV0IHNjcm9sbDtcblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcIm5hdmlnYXRpbmdUb1wiIGV2ZW50IGF0dGFjaGVkIGluIG1haW4tcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBvblBhZ2VMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuICAgIGxldCBzdGFjayA9IDxTdGFja0xheW91dD5wYWdlLmdldFZpZXdCeUlkKFwic3RhY2tcIik7XG4gICAgc2Nyb2xsID0gPFNjcm9sbFZpZXc+cGFnZS5nZXRWaWV3QnlJZChcInNjcm9sbFwiKTtcbiAgICBcbiAgICBzY3JlZW5TY2FsZSA9IHNjcmVlbi5tYWluU2NyZWVuLnNjYWxlO1xuICAgIGNvbnNvbGUubG9nKFwic2NyZWVuU2NhbGU7IFwiICsgc2NyZWVuU2NhbGUpO1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBIZWxsb1dvcmxkTW9kZWwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uU3RhY2tMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgbGV0IHN0YWNrID0gPFN0YWNrTGF5b3V0PmFyZ3Mub2JqZWN0O1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhY2suZ2V0TWVhc3VyZWRIZWlnaHQ6IFwiICsgc3RhY2suZ2V0TWVhc3VyZWRIZWlnaHQoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhY2suZ2V0TWVhc3VyZWRXaWR0aDogXCIgKyBzdGFjay5nZXRNZWFzdXJlZFdpZHRoKCkpO1xuXG4gICAgICAgIGxldCBoZWlnaHREUCA9IHN0YWNrLmdldE1lYXN1cmVkSGVpZ2h0KCkgLyBzY3JlZW5TY2FsZTtcbiAgICAgICAgbGV0IHdpZHRoRFAgPSBzdGFjay5nZXRNZWFzdXJlZFdpZHRoKCkgLyBzY3JlZW5TY2FsZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWlnaHREUDogXCIgKyBoZWlnaHREUCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2lkdGhEUDogXCIgKyB3aWR0aERQKTtcblxuICAgICAgICBzY3JvbGwuc2Nyb2xsVG9WZXJ0aWNhbE9mZnNldChoZWlnaHREUC8yKTsgLy8gd2lsbCBzY3JvbGwgdG8gMTAwMERQIChhcyB0aGUgdG90YWwgaGVpZ2h0IGlzIDIwMDApXG4gICAgfSwgMTAwKTtcbn1cbiJdfQ==
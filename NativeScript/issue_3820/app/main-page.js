"use strict";
function onLoaded(args) {
    var page = args.object;
    var scroll = page.getViewById("scroll");
    scroll.android.setScrollbarFadingEnabled(false);
    scroll.android.setVerticalScrollBarEnabled(true);
    scroll.android.setVerticalFadingEdgeEnabled(false);
    console.dir(scroll.android);
    scroll.android.setScrollBarDefaultDelayBeforeFade(5000);
    scroll.android.setScrollBarFadeDuration(1);
    console.log(scroll.android.getScrollBarDefaultDelayBeforeFade());
    console.log(scroll.android.getScrollBarFadeDuration());
}
exports.onLoaded = onLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxrQkFBeUIsSUFBZTtJQUNwQyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTdCLElBQUksTUFBTSxHQUFlLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFcEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELE1BQU0sQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxNQUFNLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsRUFBRSxDQUFDLENBQUE7SUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQTtBQUMxRCxDQUFDO0FBaEJELDRCQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBTY3JvbGxWaWV3IH0gZnJvbSBcInVpL3Njcm9sbC12aWV3XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWRlZChhcmdzOiBFdmVudERhdGEpIHsgXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuICAgIHZhciBzY3JvbGwgPSA8U2Nyb2xsVmlldz5wYWdlLmdldFZpZXdCeUlkKFwic2Nyb2xsXCIpO1xuXG4gICAgc2Nyb2xsLmFuZHJvaWQuc2V0U2Nyb2xsYmFyRmFkaW5nRW5hYmxlZChmYWxzZSk7XG4gICAgc2Nyb2xsLmFuZHJvaWQuc2V0VmVydGljYWxTY3JvbGxCYXJFbmFibGVkKHRydWUpO1xuICAgIHNjcm9sbC5hbmRyb2lkLnNldFZlcnRpY2FsRmFkaW5nRWRnZUVuYWJsZWQoZmFsc2UpO1xuXG4gICAgY29uc29sZS5kaXIoc2Nyb2xsLmFuZHJvaWQpO1xuXG4gICAgc2Nyb2xsLmFuZHJvaWQuc2V0U2Nyb2xsQmFyRGVmYXVsdERlbGF5QmVmb3JlRmFkZSg1MDAwKTtcbiAgICBzY3JvbGwuYW5kcm9pZC5zZXRTY3JvbGxCYXJGYWRlRHVyYXRpb24oMSk7XG5cbiAgICBjb25zb2xlLmxvZyhzY3JvbGwuYW5kcm9pZC5nZXRTY3JvbGxCYXJEZWZhdWx0RGVsYXlCZWZvcmVGYWRlKCkpXG4gICAgY29uc29sZS5sb2coc2Nyb2xsLmFuZHJvaWQuZ2V0U2Nyb2xsQmFyRmFkZUR1cmF0aW9uKCkpXG59Il19
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var viewModel = new observable_1.Observable();
function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = viewModel;
}
exports.navigatingTo = navigatingTo;
function onTap() {
    viewModel.set('busy', !viewModel.get("busy"));
    for (var i = 0; i < 10000; i++) {
        console.log("step " + i);
    }
}
exports.onTap = onTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQXdEO0FBR3hELElBQUksU0FBUyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBRWpDLHNCQUE2QixJQUFlO0lBQ3hDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7QUFDcEMsQ0FBQztBQUpELG9DQUlDO0FBRUQ7SUFFSSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUU5QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7QUFDTCxDQUFDO0FBUEQsc0JBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEsIE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XHJcblxyXG5sZXQgdmlld01vZGVsID0gbmV3IE9ic2VydmFibGUoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2aWV3TW9kZWw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvblRhcCgpIHtcclxuXHJcbiAgICB2aWV3TW9kZWwuc2V0KCdidXN5JywgIXZpZXdNb2RlbC5nZXQoXCJidXN5XCIpKTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDAwOyBpKyspIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0ZXAgXCIgKyBpKTtcclxuICAgIH1cclxufSJdfQ==
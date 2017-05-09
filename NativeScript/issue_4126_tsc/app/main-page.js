"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var vm = new main_view_model_1.HelloWorldModel();
;
function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = vm;
}
exports.navigatingTo = navigatingTo;
function encode() {
    var text = new java.lang.String("Yolo 10000");
    var data = text.getBytes("UTF-8");
    var base64 = android.util.Base64.encodeToString(data, android.util.Base64.DEFAULT);
    vm.set("baseString", base64);
}
exports.encode = encode;
function decode() {
    var text = vm.get("baseString");
    var data = android.util.Base64.decode(text, android.util.Base64.DEFAULT);
    var decoded = new java.lang.String(data, java.nio.charset.StandardCharsets.UTF_8);
    vm.set("decoded", decoded);
}
exports.decode = decode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscURBQW9EO0FBS3BELElBQUksRUFBRSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQUEsQ0FBQztBQUVoQyxzQkFBNkIsSUFBZTtJQUV4QyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTdCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBRTdCLENBQUM7QUFORCxvQ0FNQztBQUVEO0lBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFbkYsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDakMsQ0FBQztBQU5ELHdCQU1DO0FBRUQ7SUFDSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRWhDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekUsSUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbEYsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQVBELHdCQU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IEhlbGxvV29ybGRNb2RlbCB9IGZyb20gJy4vbWFpbi12aWV3LW1vZGVsJztcblxuZGVjbGFyZSB2YXIgamF2YTogYW55O1xuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuXG5sZXQgdm0gPSBuZXcgSGVsbG9Xb3JsZE1vZGVsKCk7O1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZSgpIHtcbiAgICB2YXIgdGV4dCA9IG5ldyBqYXZhLmxhbmcuU3RyaW5nKFwiWW9sbyAxMDAwMFwiKTtcbiAgICB2YXIgZGF0YSA9IHRleHQuZ2V0Qnl0ZXMoXCJVVEYtOFwiKTtcbiAgICB2YXIgYmFzZTY0ID0gYW5kcm9pZC51dGlsLkJhc2U2NC5lbmNvZGVUb1N0cmluZyhkYXRhLCBhbmRyb2lkLnV0aWwuQmFzZTY0LkRFRkFVTFQpO1xuXG4gICAgdm0uc2V0KFwiYmFzZVN0cmluZ1wiLCBiYXNlNjQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlKCkge1xuICAgIHZhciB0ZXh0ID0gdm0uZ2V0KFwiYmFzZVN0cmluZ1wiKTtcblxuICAgIHZhciBkYXRhID0gYW5kcm9pZC51dGlsLkJhc2U2NC5kZWNvZGUodGV4dCwgYW5kcm9pZC51dGlsLkJhc2U2NC5ERUZBVUxUKTtcbiAgICB2YXIgZGVjb2RlZCA9IG5ldyBqYXZhLmxhbmcuU3RyaW5nKGRhdGEsIGphdmEubmlvLmNoYXJzZXQuU3RhbmRhcmRDaGFyc2V0cy5VVEZfOCk7XG5cbiAgICB2bS5zZXQoXCJkZWNvZGVkXCIsIGRlY29kZWQpO1xufSJdfQ==
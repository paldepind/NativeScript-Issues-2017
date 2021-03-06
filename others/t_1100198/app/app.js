"use strict";
require("./bundle-config");
var app = require("application");
var utils = require("utils/utils");
var intent;
if (app.android) {
    app.android.on(app.AndroidApplication.activityCreatedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
        var context = utils.ad.getApplicationContext();
        intent = android.app.PendingIntent.getActivity(context, 0, new android.content.Intent(args.activity.getIntent()), args.activity.getIntent().getFlags());
    });
    app.android.on(app.AndroidApplication.activityBackPressedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
        // Set args.cancel = true to cancel back navigation and do something custom.
        var mgr = app.android.context.getSystemService(android.content.Context.ALARM_SERVICE);
        mgr.set(android.app.AlarmManager.RTC, java.lang.System.currentTimeMillis() + 2000, intent);
        java.lang.System.exit(2);
    });
}


app.on(app.suspendEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("on suspendEvent - Activity: " + args.android);
        var mgr = app.android.context.getSystemService(android.content.Context.ALARM_SERVICE);
        mgr.set(android.app.AlarmManager.RTC, java.lang.System.currentTimeMillis() + 2000, intent);
        java.lang.System.exit(2);
    }
});
app.on(app.exitEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("on exitEvent - Activity: " + args.android);
        var mgr = app.android.context.getSystemService(android.content.Context.ALARM_SERVICE);
        mgr.set(android.app.AlarmManager.RTC, java.lang.System.currentTimeMillis() + 2000, intent);
        java.lang.System.exit(2);
    }
});
app.on(app.uncaughtErrorEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an NativeScriptError.
        console.log("on uncaughtErrorEvent - NativeScriptError: " + args.android);
        var mgr = app.android.context.getSystemService(android.content.Context.ALARM_SERVICE);
        mgr.set(android.app.AlarmManager.RTC, java.lang.System.currentTimeMillis() + 2000, intent);
        java.lang.System.exit(2);
    }
});


app.start({ moduleName: 'main-page' });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyQkFBeUI7QUFDekIsaUNBQW1DO0FBQ25DLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUluQyxJQUFJLE1BQU0sQ0FBQztBQUVYLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixFQUFFLFVBQVUsSUFBSTtRQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekUsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRS9DLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDNUosQ0FBQyxDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLEVBQUUsVUFBVSxJQUFJO1FBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RSw0RUFBNEU7UUFFNUUsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFD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LE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9idW5kbGUtY29uZmlnXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAnYXBwbGljYXRpb24nO1xudmFyIHV0aWxzID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xuXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XG5kZWNsYXJlIHZhciBqYXZhOiBhbnk7XG52YXIgaW50ZW50O1xuXG5pZiAoYXBwLmFuZHJvaWQpIHtcbiAgICBhcHAuYW5kcm9pZC5vbihhcHAuQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5Q3JlYXRlZEV2ZW50LCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50OiBcIiArIGFyZ3MuZXZlbnROYW1lICsgXCIsIEFjdGl2aXR5OiBcIiArIGFyZ3MuYWN0aXZpdHkpO1xuICAgICAgICB2YXIgY29udGV4dCA9IHV0aWxzLmFkLmdldEFwcGxpY2F0aW9uQ29udGV4dCgpO1xuXG4gICAgICAgIGludGVudCA9IGFuZHJvaWQuYXBwLlBlbmRpbmdJbnRlbnQuZ2V0QWN0aXZpdHkoY29udGV4dCwgMCwgbmV3IGFuZHJvaWQuY29udGVudC5JbnRlbnQoYXJncy5hY3Rpdml0eS5nZXRJbnRlbnQoKSksIGFyZ3MuYWN0aXZpdHkuZ2V0SW50ZW50KCkuZ2V0RmxhZ3MoKSk7XG4gICAgfSk7XG5cbiAgICBhcHAuYW5kcm9pZC5vbihhcHAuQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFdmVudDogXCIgKyBhcmdzLmV2ZW50TmFtZSArIFwiLCBBY3Rpdml0eTogXCIgKyBhcmdzLmFjdGl2aXR5KTtcbiAgICAgICAgLy8gU2V0IGFyZ3MuY2FuY2VsID0gdHJ1ZSB0byBjYW5jZWwgYmFjayBuYXZpZ2F0aW9uIGFuZCBkbyBzb21ldGhpbmcgY3VzdG9tLlxuXG4gICAgICAgIHZhciBtZ3IgPSBhcHAuYW5kcm9pZC5jb250ZXh0LmdldFN5c3RlbVNlcnZpY2UoYW5kcm9pZC5jb250ZW50LkNvbnRleHQuQUxBUk1fU0VSVklDRSk7XG4gICAgICAgIG1nci5zZXQoYW5kcm9pZC5hcHAuQWxhcm1NYW5hZ2VyLlJUQywgamF2YS5sYW5nLlN5c3RlbS5jdXJyZW50VGltZU1pbGxpcygpICsgMjAwMCwgaW50ZW50KTtcbiAgICAgICAgamF2YS5sYW5nLlN5c3RlbS5leGl0KDIpO1xuICAgIH0pO1xufVxuXG5hcHAub24oYXBwLnN1c3BlbmRFdmVudCwgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBpZiAoYXJncy5hbmRyb2lkKSB7XG4gICAgICAgIC8vIEZvciBBbmRyb2lkIGFwcGxpY2F0aW9ucywgYXJncy5hbmRyb2lkIGlzIGFuIGFuZHJvaWQgYWN0aXZpdHkgY2xhc3MuXG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gc3VzcGVuZEV2ZW50IC0gQWN0aXZpdHk6IFwiICsgYXJncy5hbmRyb2lkKTtcblxuICAgICAgICB2YXIgbWdyID0gYXBwLmFuZHJvaWQuY29udGV4dC5nZXRTeXN0ZW1TZXJ2aWNlKGFuZHJvaWQuY29udGVudC5Db250ZXh0LkFMQVJNX1NFUlZJQ0UpO1xuICAgICAgICBtZ3Iuc2V0KGFuZHJvaWQuYXBwLkFsYXJtTWFuYWdlci5SVEMsIGphdmEubGFuZy5TeXN0ZW0uY3VycmVudFRpbWVNaWxsaXMoKSArIDIwMDAsIGludGVudCk7XG4gICAgICAgIGphdmEubGFuZy5TeXN0ZW0uZXhpdCgyKTtcbiAgICB9XG59KTtcblxuYXBwLm9uKGFwcC5leGl0RXZlbnQsIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgaWYgKGFyZ3MuYW5kcm9pZCkge1xuICAgICAgICAvLyBGb3IgQW5kcm9pZCBhcHBsaWNhdGlvbnMsIGFyZ3MuYW5kcm9pZCBpcyBhbiBhbmRyb2lkIGFjdGl2aXR5IGNsYXNzLlxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uIGV4aXRFdmVudCAtIEFjdGl2aXR5OiBcIiArIGFyZ3MuYW5kcm9pZCk7XG5cbiAgICAgICAgdmFyIG1nciA9IGFwcC5hbmRyb2lkLmNvbnRleHQuZ2V0U3lzdGVtU2VydmljZShhbmRyb2lkLmNvbnRlbnQuQ29udGV4dC5BTEFSTV9TRVJWSUNFKTtcbiAgICAgICAgbWdyLnNldChhbmRyb2lkLmFwcC5BbGFybU1hbmFnZXIuUlRDLCBqYXZhLmxhbmcuU3lzdGVtLmN1cnJlbnRUaW1lTWlsbGlzKCkgKyAyMDAwLCBpbnRlbnQpO1xuICAgICAgICBqYXZhLmxhbmcuU3lzdGVtLmV4aXQoMik7XG4gICAgfVxufSk7XG5cbmFwcC5vbihhcHAudW5jYXVnaHRFcnJvckV2ZW50LCBmdW5jdGlvbiAoYXJncykge1xuICAgIGlmIChhcmdzLmFuZHJvaWQpIHtcbiAgICAgICAgLy8gRm9yIEFuZHJvaWQgYXBwbGljYXRpb25zLCBhcmdzLmFuZHJvaWQgaXMgYW4gTmF0aXZlU2NyaXB0RXJyb3IuXG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gdW5jYXVnaHRFcnJvckV2ZW50IC0gTmF0aXZlU2NyaXB0RXJyb3I6IFwiICsgYXJncy5hbmRyb2lkKTtcblxuICAgICAgICB2YXIgbWdyID0gYXBwLmFuZHJvaWQuY29udGV4dC5nZXRTeXN0ZW1TZXJ2aWNlKGFuZHJvaWQuY29udGVudC5Db250ZXh0LkFMQVJNX1NFUlZJQ0UpO1xuICAgICAgICBtZ3Iuc2V0KGFuZHJvaWQuYXBwLkFsYXJtTWFuYWdlci5SVEMsIGphdmEubGFuZy5TeXN0ZW0uY3VycmVudFRpbWVNaWxsaXMoKSArIDIwMDAsIGludGVudCk7XG4gICAgICAgIGphdmEubGFuZy5TeXN0ZW0uZXhpdCgyKTtcbiAgICB9IFxufSk7XG5cbmFwcC5zdGFydCh7IG1vZHVsZU5hbWU6ICdtYWluLXBhZ2UnIH0pO1xuIl19
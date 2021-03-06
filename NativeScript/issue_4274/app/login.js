"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frameModule = require("ui/frame");
var helpers = require("./scripts/helpers");
var lock = null;
exports.onPageLoaded = function (args) {
    lock = helpers.getAuthLock();
    console.dir(lock.credientials);
    var page = args.object;
    console.log("Login page");
    if (!lock.hasValidToken()) {
        doLogin();
    }
    else {
        goToHome();
    }
};
function doLogin() {
    lock.show().then(function (res) {
        console.log("Hey login worked");
        goToHome();
    }, function (error) {
        console.log(error);
    });
}
function goToHome() {
    console.log("Lets navigate to home");
    var navOptions = {
        moduleName: "home",
        transition: {
            name: "fade",
            duration: 380,
            curve: "easeIn"
        },
        clearHistory: true
    };
    frameModule.topmost().navigate(navOptions);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUF3QztBQUN4QywyQ0FBNkM7QUFHN0MsSUFBSSxJQUFJLEdBQWMsSUFBSSxDQUFDO0FBRTNCLE9BQU8sQ0FBQyxZQUFZLEdBQUcsVUFBVSxJQUFJO0lBQ2pDLElBQUksR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRzFCLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUEsQ0FBQztRQUV0QixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUVOLFFBQVEsRUFBRSxDQUFDO0lBQ2IsQ0FBQztBQUNMLENBQUMsQ0FBQTtBQUdEO0lBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLFFBQVEsRUFBRSxDQUFDO0lBQ2YsQ0FBQyxFQUFFLFVBQVUsS0FBSztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQ7SUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFFckMsSUFBSSxVQUFVLEdBQUc7UUFDYixVQUFVLEVBQUUsTUFBTTtRQUNsQixVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxHQUFHO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDbEI7UUFDRCxZQUFZLEVBQUUsSUFBSTtLQUNyQixDQUFDO0lBQ0YsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUUvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgKiBhcyBmcmFtZU1vZHVsZSBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4vc2NyaXB0cy9oZWxwZXJzXCI7XG5pbXBvcnQgeyBBdXRoMExvY2sgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWF1dGgwXCI7XG5cbmxldCBsb2NrOiBBdXRoMExvY2sgPSBudWxsO1xuXG5leHBvcnRzLm9uUGFnZUxvYWRlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgbG9jayA9IGhlbHBlcnMuZ2V0QXV0aExvY2soKTtcbiAgICBjb25zb2xlLmRpcihsb2NrLmNyZWRpZW50aWFscyk7XG4gICAgdmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICBjb25zb2xlLmxvZyhcIkxvZ2luIHBhZ2VcIik7XG5cbiAgICAvL0NoZWNrIHRvIHNlZSBpZiB0aGUgdXNlciBpcyBsb2dnZWQgaW5cbiAgICBpZighbG9jay5oYXNWYWxpZFRva2VuKCkpe1xuICAgICAgLy9ObyB0b2tlbnMgLT4gbG9naW5cbiAgICAgICAgZG9Mb2dpbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL1Rva2VucyBhdmFpbGFibGUuIENoZWNrIGV4cGlyeSBhbmQgaWYgT0sgc2hvdyAnaG9tZSdcbiAgICAgIGdvVG9Ib21lKCk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGRvTG9naW4oKXtcbiAgICBsb2NrLnNob3coKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIZXkgbG9naW4gd29ya2VkXCIpO1xuICAgICAgICBnb1RvSG9tZSgpO1xuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdvVG9Ib21lKCl7XG4gICAgY29uc29sZS5sb2coXCJMZXRzIG5hdmlnYXRlIHRvIGhvbWVcIik7XG5cbiAgICB2YXIgbmF2T3B0aW9ucyA9IHtcbiAgICAgICAgbW9kdWxlTmFtZTogXCJob21lXCIsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSAvL0RvbnQgd2FudCB0aGUgdXNlciB0byBuYXYgYmFjayB0byBsb2dpblxuICAgIH07XG4gICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLm5hdmlnYXRlKG5hdk9wdGlvbnMpO1xuXG59XG4iXX0=
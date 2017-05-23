import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { ListViewEventData } from "nativescript-telerik-ui-pro/listview"

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    itemSelecting(args: ListViewEventData) {
        console.log("Item selecting!");
        console.log("itemIndex: " + args.itemIndex);
        console.log("groupIndex: " + args.groupIndex);
        console.log("returnValue: " + args.returnValue); // true

        if (args.itemIndex > 5) {
            args.returnValue = false; // all items with index > 5 WONT be selectible
            console.log("returnValue: " + args.returnValue); // false
        }
      
    }

    itemSelected(args: ListViewEventData) {
        console.log("Item selected!");
        console.log("itemIndex: " + args.itemIndex);
        console.log("groupIndex: " + args.groupIndex);
    }

    itemDeselected(args: ListViewEventData) {
        console.log("Item deselected!");
        console.log("itemIndex: " + args.itemIndex);
        console.log("groupIndex: " + args.groupIndex);
    }
}

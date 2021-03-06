// Created by baihuibo on 16/3/24.

import {Controller, Route} from "annotation";
import {sort} from "util";
import {IScope} from "../../typings/common/IScope";
import {User} from "../../typings/entity/page/User";
import {IPageCtrl} from "../../typings/interface/IPageCtrl";

@Route({
    route: "/page",
    controllerAs: "T",
    templateUrl: "scripts/views/page/page.html"
})
@Controller
export class PageCtrl implements IPageCtrl {
    public users:User[];
    private sortFlag:boolean;
    public name:string;
    public paging:PagingOption = {};

    constructor(public $scope:IScope, public menu, TestPaging) {
        this.users = this.queryUser();
        this.name = "hello ctrl";
        this.paging.resource = TestPaging;
    }

    order() {
        sort(this.users, (a, b) => {
            if (this.sortFlag) {
                return a.age - b.age;
            }
            return b.age - a.age;
        });

        this.sortFlag = !this.sortFlag;
    }

    queryUser():User[] {
        var users:User[] = [];
        for (var i = 0; i < 5; i++) {
            var user:User = {
                age: Math.ceil(Math.random() * 100),
                name: Math.random().toString(32).slice(2)
            };
            users.push(user);
        }

        return users;
    }
}

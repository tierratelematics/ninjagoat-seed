import "reflect-metadata";
import expect = require("expect.js");
import AccountsViewModel from "../scripts/viewmodels/AccountsViewModel";
import {Subject} from "rx";
import {ModelState} from "ninjagoat-projections";
import {Account} from "../scripts/Types";

describe("Given an AccountsViewModel", () => {
    let subject: AccountsViewModel;
    let data: Subject<ModelState<Account>>;

    beforeEach(() => {
        data = new Subject<ModelState<Account>>();
        subject = new AccountsViewModel();
        subject.observe(data);
    });

    context("when a new account is received", () => {
        let account: Account = {
            id: "av4-53",
            name: "test-account",
            status: "ACTIVE"
        };
        beforeEach(() => data.onNext(ModelState.Ready(account)));
        it("should be exposed", () => {
            expect(subject.account).to.be(account);
        });
    });
});
import { helloWorld } from "./helloword";

test("retourne la chaîne hello world", () => {
    expect(helloWorld()).toBe("hello world");
});
async f => expect((await f(_ => "success"))).toBe("success")
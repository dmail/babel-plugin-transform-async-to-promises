async f => expect((await f(_ => false, _ => 1, async _ => 0))).toBe(0)
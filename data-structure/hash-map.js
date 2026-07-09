class HashMap {
  buckets = Array(16).fill(null).map(() => []); // 16个抽屉，每个都是个小篮子(数组)

  _hash(key) {
    let h = 0;
    for (let c of key) h = (h * 31 + c.charCodeAt(0)) % 16;
    return h;
  }

  set(key, value) {
    const idx = this._hash(key);
    const bucket = this.buckets[idx];
    // 找得到就更新，找不到就塞进去
    const pair = bucket.find(p => p[0] === key);
    if (pair) {
      pair[1] = value;
    } else {
      // [key, value] 是 HashMap 中常见存储数据的方式
      bucket.push([key, value]);
    }
  }

  get(key) {
    const bucket = this.buckets[this._hash(key)];
    // 找到存有 key 的数组，如果存在，取出 value
    return bucket.find(p => p[0] === key)?.[1];
  }
}
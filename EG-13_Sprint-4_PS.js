var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let map1 = {};
    let map2 = {};

    for (let i = 0; i < s.length; i++) {
        let char1 = s[i];
        let char2 = t[i];

        if (map1[char1] && map1[char1] !== char2) {
            return false;
        }

        if (map2[char2] && map2[char2] !== char1) {
            return false;
        }

        map1[char1] = char2;
        map2[char2] = char1;
    }

    return true;
};

var wordPattern = function(pattern, s) {
    let words = s.split(" ");

    if (pattern.length !== words.length) {
        return false;
    }

    let map1 = {};
    let map2 = {};

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let word = words[i];

        if (map1[char] && map1[char] !== word) {
            return false;
        }

        if (map2[word] && map2[word] !== char) {
            return false;
        }

        map1[char] = word;
        map2[word] = char;
    }

    return true;
};

var findTheDifference = function(s, t) {
    let count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) {
            return char;
        }

        count[char]--;
    }

    return null;
};

var reverseList = function(head) {
    let previous = null;
    let current = head;

    while (current !== null) {
        let next = current.next;

        current.next = previous;
        previous = current;
        current = next;
    }

    return previous;
};

var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

var productExceptSelf = function(nums) {
    let result = [];
    let product = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = product;
        product *= nums[i];
    }

    product = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= product;
        product *= nums[i];
    }

    return result;
};

var removeNthFromEnd = function(head, n) {
    let dummy = {
        next: head
    };

    let slow = dummy;
    let fast = dummy;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};

var searchRange = function(nums, target) {
    let first = -1;
    let last = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (first === -1) {
                first = i;
            }

            last = i;
        }
    }

    return [first, last];
};

var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    let count1 = {};
    let count2 = {};

    for (let char of s1) {
        count1[char] = (count1[char] || 0) + 1;
    }

    for (let i = 0; i < s2.length; i++) {
        let char = s2[i];
        count2[char] = (count2[char] || 0) + 1;

        if (i >= s1.length) {
            let oldChar = s2[i - s1.length];

            count2[oldChar]--;

            if (count2[oldChar] === 0) {
                delete count2[oldChar];
            }
        }

        if (JSON.stringify(count1) === JSON.stringify(count2)) {
            return true;
        }
    }

    return false;
};

var findAnagrams = function(s, p) {
    let result = [];
    let count1 = {};
    let count2 = {};

    for (let char of p) {
        count1[char] = (count1[char] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        count2[char] = (count2[char] || 0) + 1;

        if (i >= p.length) {
            let oldChar = s[i - p.length];

            count2[oldChar]--;

            if (count2[oldChar] === 0) {
                delete count2[oldChar];
            }
        }

        if (JSON.stringify(count1) === JSON.stringify(count2)) {
            result.push(i - p.length + 1);
        }
    }

    return result;
};
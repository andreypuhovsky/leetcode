<p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum&nbsp;as a linked list.</p>

<p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>

<p>&nbsp;</p> 
<p><strong class="example">Example 1:</strong></p> 
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg" style="width: 483px; height: 342px;" /> 
<pre>
<strong>Input:</strong> l1 = [2,4,3], l2 = [5,6,4]
<strong>Output:</strong> [7,0,8]
<strong>Explanation:</strong> 342 + 465 = 807.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> l1 = [0], l2 = [0]
<strong>Output:</strong> [0]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
<strong>Output:</strong> [8,9,9,9,0,0,0,1]
</pre>

<p>&nbsp;</p> 
<p><strong>Constraints:</strong></p>

<ul> 
 <li>The number of nodes in each linked list is in the range <code>[1, 100]</code>.</li> 
 <li><code>0 &lt;= Node.val &lt;= 9</code></li> 
 <li>It is guaranteed that the list represents a number that does not have leading zeros.</li> 
</ul>

<details><summary><strong>Related Topics</strong></summary>Linked List | Math | Recursion</details><br>

<div>👍 29833, 👎 5841<span style='float: right;'><span style='color: gray;'><a href='https://github.com/labuladong/fucking-algorithm/discussions/939' target='_blank' style='color: lightgray;text-decoration: underline;'>bug 反馈</a> | <a href='https://labuladong.gitee.io/article/fname.html?fname=jb插件简介' target='_blank' style='color: lightgray;text-decoration: underline;'>使用指南</a> | <a href='https://labuladong.github.io/algo/images/others/%E5%85%A8%E5%AE%B6%E6%A1%B6.jpg' target='_blank' style='color: lightgray;text-decoration: underline;'>更多配套插件</a></span></span></div>

<div id="labuladong"><hr>

**通知：[数据结构精品课](https://labuladong.online/algo/ds-class/) 和 [递归算法专题课](https://labuladong.online/algo/tree-class/) 限时附赠网站会员；算法可视化编辑器上线，[点击体验](https://labuladong.online/algo-visualize/)！**

<details><summary><strong>labuladong 思路</strong></summary>

## 基本思路

逆序存储很友好了，直接遍历链表就是从个位开始的，符合我们计算加法的习惯顺序。如果是正序存储，那倒要费点脑筋了，可能需要 [翻转链表](https://labuladong.github.io/article/fname.html?fname=递归反转链表的一部分) 或者使用栈来辅助。

这道题主要考察 [链表双指针技巧](https://labuladong.github.io/article/fname.html?fname=链表技巧) 和加法运算过程中对进位的处理。注意这个 `carry` 变量的处理，在我们手动模拟加法过程的时候会经常用到。

**代码中还用到一个链表的算法题中是很常见的「虚拟头结点」技巧，也就是 `dummy` 节点**。你可以试试，如果不使用 `dummy` 虚拟节点，代码会稍显复杂，而有了 `dummy` 节点这个占位符，可以避免处理初始的空指针情况，降低代码的复杂性。

**标签：[数据结构](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzAxODQxMDM0Mw==&action=getalbum&album_id=1318892385270808576)，[链表双指针](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzAxODQxMDM0Mw==&action=getalbum&album_id=2120596033251475465)**

## 解法代码

提示：🟢 标记的是我写的解法代码，🤖 标记的是 chatGPT 翻译的多语言解法代码。如有错误，可以 [点这里](https://github.com/labuladong/fucking-algorithm/issues/1113) 反馈和修正。

<div class="tab-panel"><div class="tab-nav">
<button data-tab-item="cpp" class="tab-nav-button btn " data-tab-group="default" onclick="switchTab(this)">cpp🤖</button>

<button data-tab-item="python" class="tab-nav-button btn " data-tab-group="default" onclick="switchTab(this)">python🤖</button>

<button data-tab-item="java" class="tab-nav-button btn active" data-tab-group="default" onclick="switchTab(this)">java🟢</button>

<button data-tab-item="go" class="tab-nav-button btn " data-tab-group="default" onclick="switchTab(this)">go🤖</button>

<button data-tab-item="javascript" class="tab-nav-button btn " data-tab-group="default" onclick="switchTab(this)">javascript🤖</button>
</div><div class="tab-content">
<div data-tab-item="cpp" class="tab-item " data-tab-group="default"><div class="highlight">

```cpp
// 注意：cpp 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的测试用例，应该可直接成功提交。

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        // 在两条链表上的指针
        ListNode *p1 = l1, *p2 = l2;
        // 虚拟头结点（构建新链表时的常用技巧）
        ListNode *dummy = new ListNode(-1);
        // 指针 p 负责构建新链表
        ListNode *p = dummy;
        // 记录进位
        int carry = 0;
        // 开始执行加法，两条链表走完且没有进位时才能结束循环
        while (p1 != nullptr || p2 != nullptr || carry > 0) {
            // 先加上上次的进位
            int val = carry;
            if (p1 != nullptr) {
                val += p1->val;
                p1 = p1->next;
            }
            if (p2 != nullptr) {
                val += p2->val;
                p2 = p2->next;
            }
            // 处理进位情况
            carry = val / 10;
            val = val % 10;
            // 构建新节点
            p->next = new ListNode(val);
            p = p->next;
        }
        // 返回结果链表的头结点（去除虚拟头结点）
        return dummy->next;
    }
};
```

</div></div>

<div data-tab-item="python" class="tab-item " data-tab-group="default"><div class="highlight">

```python
# 注意：python 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
# 本代码已经通过力扣的测试用例，应该可直接成功提交。

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        # 在两条链表上的指针
        p1, p2 = l1, l2
        # 虚拟头结点（构建新链表时的常用技巧）
        dummy = ListNode(-1)
        # 指针 p 负责构建新链表
        p = dummy
        # 记录进位
        carry = 0
        # 开始执行加法，两条链表走完且没有进位时才能结束循环
        while p1 or p2 or carry:
            # 先加上上次的进位
            val = carry
            if p1:
                val += p1.val
                p1 = p1.next
            if p2:
                val += p2.val
                p2 = p2.next
            # 处理进位情况
            carry, val = divmod(val, 10)
            # 构建新节点
            p.next = ListNode(val)
            p = p.next
        # 返回结果链表的头结点（去除虚拟头结点）
        return dummy.next
```

</div></div>

<div data-tab-item="java" class="tab-item active" data-tab-group="default"><div class="highlight">

```java
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // 在两条链表上的指针
        ListNode p1 = l1, p2 = l2;
        // 虚拟头结点（构建新链表时的常用技巧）
        ListNode dummy = new ListNode(-1);
        // 指针 p 负责构建新链表
        ListNode p = dummy;
        // 记录进位
        int carry = 0;
        // 开始执行加法，两条链表走完且没有进位时才能结束循环
        while (p1 != null || p2 != null || carry > 0) {
            // 先加上上次的进位
            int val = carry;
            if (p1 != null) {
                val += p1.val;
                p1 = p1.next;
            }
            if (p2 != null) {
                val += p2.val;
                p2 = p2.next;
            }
            // 处理进位情况
            carry = val / 10;
            val = val % 10;
            // 构建新节点
            p.next = new ListNode(val);
            p = p.next;
        }
        // 返回结果链表的头结点（去除虚拟头结点）
        return dummy.next;
    }
}
```

</div></div>

<div data-tab-item="go" class="tab-item " data-tab-group="default"><div class="highlight">

```go
// 注意：go 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的测试用例，应该可直接成功提交。

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    // 在两条链表上的指针
    p1, p2 := l1, l2
    // 虚拟头结点（构建新链表时的常用技巧）
    dummy := &ListNode{-1, nil}
    // 指针 p 负责构建新链表
    p := dummy
    // 记录进位
    carry := 0
    // 开始执行加法，两条链表走完且没有进位时才能结束循环
    for p1 != nil || p2 != nil || carry > 0 {
        // 先加上上次的进位
        val := carry
        if p1 != nil {
            val += p1.Val
            p1 = p1.Next
        }
        if p2 != nil {
            val += p2.Val
            p2 = p2.Next
        }
        // 处理进位情况
        carry = val / 10
        val = val % 10
        // 构建新节点
        p.Next = &ListNode{val, nil}
        p = p.Next
    }
    // 返回结果链表的头结点（去除虚拟头结点）
    return dummy.Next
}
```

</div></div>

<div data-tab-item="javascript" class="tab-item " data-tab-group="default"><div class="highlight">

```javascript
// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的测试用例，应该可直接成功提交。

var addTwoNumbers = function(l1, l2) {
    // 在两条链表上的指针
    let p1 = l1, p2 = l2;
    // 虚拟头结点（构建新链表时的常用技巧）
    let dummy = new ListNode(-1);
    // 指针 p 负责构建新链表
    let p = dummy;
    // 记录进位
    let carry = 0;
    // 开始执行加法，两条链表走完且没有进位时才能结束循环
    while (p1 !== null || p2 !== null || carry > 0) {
        // 先加上上次的进位
        let val = carry;
        if (p1 !== null) {
            val += p1.val;
            p1 = p1.next;
        }
        if (p2 !== null) {
            val += p2.val;
            p2 = p2.next;
        }
        // 处理进位情况
        carry = Math.floor(val / 10);
        val = val % 10;
        // 构建新节点
        p.next = new ListNode(val);
        p = p.next;
    }
    // 返回结果链表的头结点（去除虚拟头结点）
    return dummy.next;
};
```

</div></div>
</div></div>

<hr /><details open hint-container details><summary style="font-size: medium"><strong>👾👾 算法可视化 👾👾</strong></summary><div id="data_add-two-numbers" data="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"></div><div class="resizable aspect-ratio-container" style="height: 100%;">
<div id="iframe_add-two-numbers"></div></div>
</details><hr /><br />

**类似题目**：
  - [445. 两数相加 II 🟠](/problems/add-two-numbers-ii)
  - [67. 二进制求和 🟢](/problems/add-binary)
  - [剑指 Offer II 025. 链表中的两数相加 🟠](/problems/lMSNwu)

</details>
</div>


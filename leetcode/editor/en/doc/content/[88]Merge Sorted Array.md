<p>You are given two integer arrays <code>nums1</code> and <code>nums2</code>, sorted in <strong>non-decreasing order</strong>, and two integers <code>m</code> and <code>n</code>, representing the number of elements in <code>nums1</code> and <code>nums2</code> respectively.</p>

<p><strong>Merge</strong> <code>nums1</code> and <code>nums2</code> into a single array sorted in <strong>non-decreasing order</strong>.</p>

<p>The final sorted array should not be returned by the function, but instead be <em>stored inside the array </em><code>nums1</code>. To accommodate this, <code>nums1</code> has a length of <code>m + n</code>, where the first <code>m</code> elements denote the elements that should be merged, and the last <code>n</code> elements are set to <code>0</code> and should be ignored. <code>nums2</code> has a length of <code>n</code>.</p>

<p>&nbsp;</p> 
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
<strong>Output:</strong> [1,2,2,3,5,6]
<strong>Explanation:</strong> The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [<u>1</u>,<u>2</u>,2,<u>3</u>,5,6] with the underlined elements coming from nums1.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1], m = 1, nums2 = [], n = 0
<strong>Output:</strong> [1]
<strong>Explanation:</strong> The arrays we are merging are [1] and [].
The result of the merge is [1].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [0], m = 0, nums2 = [1], n = 1
<strong>Output:</strong> [1]
<strong>Explanation:</strong> The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
</pre>

<p>&nbsp;</p> 
<p><strong>Constraints:</strong></p>

<ul> 
 <li><code>nums1.length == m + n</code></li> 
 <li><code>nums2.length == n</code></li> 
 <li><code>0 &lt;= m, n &lt;= 200</code></li> 
 <li><code>1 &lt;= m + n &lt;= 200</code></li> 
 <li><code>-10<sup>9</sup> &lt;= nums1[i], nums2[j] &lt;= 10<sup>9</sup></code></li> 
</ul>

<p>&nbsp;</p> 
<p><strong>Follow up: </strong>Can you come up with an algorithm that runs in <code>O(m + n)</code> time?</p>

<details><summary><strong>Related Topics</strong></summary>Array | Two Pointers | Sorting</details><br>

<div>👍 13852, 👎 1679<span style='float: right;'><span style='color: gray;'><a href='https://github.com/labuladong/fucking-algorithm/discussions/939' target='_blank' style='color: lightgray;text-decoration: underline;'>bug 反馈</a> | <a href='https://labuladong.gitee.io/article/fname.html?fname=jb插件简介' target='_blank' style='color: lightgray;text-decoration: underline;'>使用指南</a> | <a href='https://labuladong.github.io/algo/images/others/%E5%85%A8%E5%AE%B6%E6%A1%B6.jpg' target='_blank' style='color: lightgray;text-decoration: underline;'>更多配套插件</a></span></span></div>

<div id="labuladong"><hr>

**通知：[数据结构精品课](https://labuladong.online/algo/ds-class/) 和 [递归算法专题课](https://labuladong.online/algo/tree-class/) 限时附赠网站会员；算法可视化编辑器上线，[点击体验](https://labuladong.online/algo-visualize/)！**

<details><summary><strong>labuladong 思路</strong></summary>

## 基本思路

这道题很像前文 [链表的双指针技巧汇总](https://labuladong.github.io/article/fname.html?fname=链表技巧) 中讲过的 [21. 合并两个有序链表](/problems/merge-two-sorted-lists)，这里让你合并两个有序数组。

对于单链表来说，我们直接用双指针从头开始合并即可，但对于数组来说会出问题。因为题目让我直接把结果存到 `nums1` 中，而 `nums1` 的开头有元素，如果我们无脑复制单链表的逻辑，会覆盖掉 `nums1` 的原始元素，导致错误。

但 `nums1` 后面是空的呀，所以这道题需要我们稍微变通一下：**将双指针初始化在数组的尾部，然后从后向前进行合并**，这样即便覆盖了 `nums1` 中的元素，这些元素也必然早就被用过了，不会影响答案的正确性。

**标签：[数据结构](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzAxODQxMDM0Mw==&action=getalbum&album_id=1318892385270808576)，[数组双指针](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzAxODQxMDM0Mw==&action=getalbum&album_id=2120601117519675393)**

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
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        // 两个指针分别初始化在两个数组的最后一个元素（类似拉链两端的锯齿）
        int i = m - 1, j = n - 1;
        // 生成排序的结果（类似拉链的拉锁）
        int p = nums1.size() - 1;
        // 从后向前生成结果数组，类似合并两个有序链表的逻辑
        while (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[p] = nums1[i];
                i--;
            } else {
                nums1[p] = nums2[j];
                j--;
            }
            p--;
        }
        // 可能其中一个数组的指针走到尽头了，而另一个还没走完
        // 因为我们本身就是在往 nums1 中放元素，所以只需考虑 nums2 是否剩元素即可
        while (j >= 0) {
            nums1[p] = nums2[j];
            j--;
            p--;
        }
    }
};
```

</div></div>

<div data-tab-item="python" class="tab-item " data-tab-group="default"><div class="highlight">

```python
# 注意：python 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
# 本代码已经通过力扣的测试用例，应该可直接成功提交。

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        # 两个指针分别初始化在两个数组的最后一个元素（类似拉链两端的锯齿）
        i, j = m - 1, n - 1
        # 生成排序的结果（类似拉链的拉锁）
        p = len(nums1) - 1
        # 从后向前生成结果数组，类似合并两个有序链表的逻辑
        while i >= 0 and j >= 0:
            if nums1[i] > nums2[j]:
                nums1[p] = nums1[i]
                i -= 1
            else:
                nums1[p] = nums2[j]
                j -= 1
            p -= 1
        # 可能其中一个数组的指针走到尽头了，而另一个还没走完
        # 因为我们本身就是在往 nums1 中放元素，所以只需考虑 nums2 是否剩元素即可
        while j >= 0:
            nums1[p] = nums2[j]
            j -= 1
            p -= 1
```

</div></div>

<div data-tab-item="java" class="tab-item active" data-tab-group="default"><div class="highlight">

```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        // 两个指针分别初始化在两个数组的最后一个元素（类似拉链两端的锯齿）
        int i = m - 1, j = n - 1;
        // 生成排序的结果（类似拉链的拉锁）
        int p = nums1.length - 1;
        // 从后向前生成结果数组，类似合并两个有序链表的逻辑
        while (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[p] = nums1[i];
                i--;
            } else {
                nums1[p] = nums2[j];
                j--;
            }
            p--;
        }
        // 可能其中一个数组的指针走到尽头了，而另一个还没走完
        // 因为我们本身就是在往 nums1 中放元素，所以只需考虑 nums2 是否剩元素即可
        while (j >= 0) {
            nums1[p] = nums2[j];
            j--;
            p--;
        }
    }
}
```

</div></div>

<div data-tab-item="go" class="tab-item " data-tab-group="default"><div class="highlight">

```go
// 注意：go 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的测试用例，应该可直接成功提交。

func merge(nums1 []int, m int, nums2 []int, n int)  {
    i, j, p := m-1, n-1, len(nums1)-1 // 初始化指针
    for i >= 0 && j >= 0 { // 两个数组都未遍历完时进行比较
        if nums1[i] > nums2[j] { // 挑选大的元素放入 nums1 的末位
            nums1[p] = nums1[i]
            i--
        } else {
            nums1[p] = nums2[j]
            j--
        }
        p-- // 从后往前生成结果
    }
    for j >= 0 { // nums2 剩余元素放入 nums1
        nums1[p] = nums2[j]
        j--
        p--
    }
}
```

</div></div>

<div data-tab-item="javascript" class="tab-item " data-tab-group="default"><div class="highlight">

```javascript
// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的测试用例，应该可直接成功提交。

var merge = function(nums1, m, nums2, n) {
    // 两个指针分别初始化在两个数组的最后一个元素（类似拉链两端的锯齿）
    var i = m - 1, j = n - 1;
    // 生成排序的结果（类似拉链的拉锁）
    var p = nums1.length - 1;
    // 从后向前生成结果数组，类似合并两个有序链表的逻辑
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[p] = nums1[i];
            i--;
        } else {
            nums1[p] = nums2[j];
            j--;
        }
        p--;
    }
    // 可能其中一个数组的指针走到尽头了，而另一个还没走完
    // 因为我们本身就是在往 nums1 中放元素，所以只需考虑 nums2 是否剩元素即可
    while (j >= 0) {
        nums1[p] = nums2[j];
        j--;
        p--;
    }
};
```

</div></div>
</div></div>

<hr /><details open hint-container details><summary style="font-size: medium"><strong>🥳🥳 算法可视化 🥳🥳</strong></summary><div id="data_merge-sorted-array" data="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"></div><div class="resizable aspect-ratio-container" style="height: 100%;">
<div id="iframe_merge-sorted-array"></div></div>
</details><hr /><br />

**类似题目**：
  - [977. 有序数组的平方 🟢](/problems/squares-of-a-sorted-array)

</details>
</div>


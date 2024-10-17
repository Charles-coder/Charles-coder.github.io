---
title: csp笔记
date: 2023-07-17 10:38:19
tags: #学习记录 #大学生涯
keywords: "记录算法竞赛的学习内容"
description: 什么是天才！我想，天才就是勤奋的结果。
cover: https://pic-1318156172.cos.ap-beijing.myqcloud.com/cover/1.4.png
swiper_index: 6
ai:
  - 本教程介绍了acwing平台的备战csp/ccf的课程笔记
---



42.接雨水



```
class Solution {
    public int maxArea(int[] height) {
        int i=0,j=height.length-1,res=0;
        while(i<j){
            res=height[i]<height[j]?
                Math.max(res, (j - i) * height[i++]):
                Math.max(res,(j-i)*height[j--]);
        }
        return res;
    }
}
```

使用双指针，每次都移动短板那边的双指针就行



### 三数之和

给你一个整数数组 `nums` ，判断是否存在三元组 `[nums[i], nums[j], nums[k]]` 满足 `i != j`、`i != k` 且 `j != k` ，同时还满足 `nums[i] + nums[j] + nums[k] == 0` 。请

你返回所有和为 `0` 且不重复的三元组。

**注意：**答案中不可以包含重复的三元组。

**示例 1：**

```
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
```

```
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> ans =new ArrayList();
        int len=nums.length;
        if(nums==null||len<3) return null;
        Arrays.sort(nums);
        for(int i=0;i<len;i++){
            if(nums[i]>0) break;
            if(i>0&&nums[i]==nums[i-1]) continue;
            int L=i+1;
            int R=len-1;
            while(L<R){
               int sum = nums[i] + nums[L] + nums[R];
                if(sum==0){
                    ans.add(Arrays.asList(nums[i],nums[L],nums[R]));
                    while(L<R&&nums[L]==nums[L+1]) L++;
                    while(L<R&&nums[R]==nums[R-1]) R--;
                    L++;
                    R--;
                    }
                    else if(sum<0) L++;
                    else if(sum>0) R--;
                }
            
        }
        return ans;
    }
}
```



> 1. if (i > 0 && nums[i] == nums[i - 1]) continue; 这行代码的目的是跳过重复的 nums[i]。当 i > 0（即不是第一次循环）并且 nums[i] 和 nums[i - 1] 相同时（即当前元素和前一个元素相同），我们就跳过当前的循环，因为我们已经在前一个循环中考虑过这个元素了。

> ​	2.while (l < r && nums[l] == nums[l + 1]) l++; 这行代码的目的是跳过所有和 nums[l] 相同的元素。在这个循环结束后，l 会停在最后一个和 nums[l] 相同的元素的下一个元素。然后，l++ 这行代码会执行，无论前面的 while 循环是否已经改变了 l 的值。这是因为在找到一个和为 0 的三元组后，我们需要移动 l 和 r，以找到下一个可能的三元组。


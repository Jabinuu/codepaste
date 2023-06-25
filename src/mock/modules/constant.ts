import { CategoriesEnum, ExpirationsEnum, HighlightLangEnum } from '@/enums/codeEnum'
import type { CodeSet } from '@/types/codeContentInfo'

export const exposureSet: Array<string> = ['public', 'private']
export const expirationSet: string[] = [ExpirationsEnum.D1, ExpirationsEnum.H1, ExpirationsEnum.M10, ExpirationsEnum.MON1, ExpirationsEnum.NEVER, ExpirationsEnum.W1]
export const dates: string[] = ['1月前', '2月前', '3天前', '4月前', '10分钟前']
export const codeSet: CodeSet[] = [
  {
    category: CategoriesEnum.CODE,
    lang: HighlightLangEnum.C,
    content: `class Solution {
      public:
          int getKthElement(const vector<int>& nums1, const vector<int>& nums2, int k) {
              /* 主要思路：要找到第 k (k>1) 小的元素，那么就取 pivot1 = nums1[k/2-1] 和 pivot2 = nums2[k/2-1] 进行比较
               * 这里的 "/" 表示整除
               * nums1 中小于等于 pivot1 的元素有 nums1[0 .. k/2-2] 共计 k/2-1 个
               * nums2 中小于等于 pivot2 的元素有 nums2[0 .. k/2-2] 共计 k/2-1 个
               * 取 pivot = min(pivot1, pivot2)，两个数组中小于等于 pivot 的元素共计不会超过 (k/2-1) + (k/2-1) <= k-2 个
               * 这样 pivot 本身最大也只能是第 k-1 小的元素
               * 如果 pivot = pivot1，那么 nums1[0 .. k/2-1] 都不可能是第 k 小的元素。把这些元素全部 "删除"，剩下的作为新的 nums1 数组
               * 如果 pivot = pivot2，那么 nums2[0 .. k/2-1] 都不可能是第 k 小的元素。把这些元素全部 "删除"，剩下的作为新的 nums2 数组
               * 由于我们 "删除" 了一些元素（这些元素都比第 k 小的元素要小），因此需要修改 k 的值，减去删除的数的个数
               */
      
              int m = nums1.size();
              int n = nums2.size();
              int index1 = 0, index2 = 0;
      
              while (true) {
                  // 边界情况
                  if (index1 == m) {
                      return nums2[index2 + k - 1];
                  }
                  if (index2 == n) {
                      return nums1[index1 + k - 1];
                  }
                  if (k == 1) {
                      return min(nums1[index1], nums2[index2]);
                  }
      
                  // 正常情况
                  int newIndex1 = min(index1 + k / 2 - 1, m - 1);
                  int newIndex2 = min(index2 + k / 2 - 1, n - 1);
                  int pivot1 = nums1[newIndex1];
                  int pivot2 = nums2[newIndex2];
                  if (pivot1 <= pivot2) {
                      k -= newIndex1 - index1 + 1;
                      index1 = newIndex1 + 1;
                  }
                  else {
                      k -= newIndex2 - index2 + 1;
                      index2 = newIndex2 + 1;
                  }
              }
          }
      
          double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
              int totalLength = nums1.size() + nums2.size();
              if (totalLength % 2 == 1) {
                  return getKthElement(nums1, nums2, (totalLength + 1) / 2);
              }
              else {
                  return (getKthElement(nums1, nums2, totalLength / 2) + getKthElement(nums1, nums2, totalLength / 2 + 1)) / 2.0;
              }
          }
      };`,
  },
  {
    category: CategoriesEnum.CODE,
    lang: HighlightLangEnum.CSS,
    content: ` .one{
      display: inline-block;
      width: 18px;
      height: 24px;
      /* background-color: pink; */
      background-image: url(./materials/taobao.png);
      /* 背景图调整位置 ，水平 垂直方向*/
      background-position: -3px 0;
  }
  .two{
      display: block;
      width: 24px;
      height: 21px;
      background-position: 0 -90px;
      background-image: url(./materials/taobao.png);
  }`,
  },
  {
    category: CategoriesEnum.CODE,
    lang: HighlightLangEnum.HTML,
    content: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .one{
                display: inline-block;
                width: 18px;
                height: 24px;
                /* background-color: pink; */
                background-image: url(./materials/taobao.png);
                /* 背景图调整位置 ，水平 垂直方向*/
                background-position: -3px 0;
            }
            .two{
                display: block;
                width: 24px;
                height: 21px;
                background-position: 0 -90px;
                background-image: url(./materials/taobao.png);
            }
        </style>
    </head>
    <body>
        <!-- 精灵图一般用行内元素span，因为应用基本是同行显示 -->
        <span class="one"></span>
        <span class="two"></span>
    </body>
    </html>`,
  },
  {
    category: CategoriesEnum.CODE,
    lang: HighlightLangEnum.JAVA,
    content: `class Solution {
      public double findMedianSortedArrays(int[] nums1, int[] nums2) {
          int length1 = nums1.length, length2 = nums2.length;
          int totalLength = length1 + length2;
          if (totalLength % 2 == 1) {
              int midIndex = totalLength / 2;
              double median = getKthElement(nums1, nums2, midIndex + 1);
              return median;
          } else {
              int midIndex1 = totalLength / 2 - 1, midIndex2 = totalLength / 2;
              double median = (getKthElement(nums1, nums2, midIndex1 + 1) + getKthElement(nums1, nums2, midIndex2 + 1)) / 2.0;
              return median;
          }
      }
  
      public int getKthElement(int[] nums1, int[] nums2, int k) {
          /* 主要思路：要找到第 k (k>1) 小的元素，那么就取 pivot1 = nums1[k/2-1] 和 pivot2 = nums2[k/2-1] 进行比较
           * 这里的 "/" 表示整除
           * nums1 中小于等于 pivot1 的元素有 nums1[0 .. k/2-2] 共计 k/2-1 个
           * nums2 中小于等于 pivot2 的元素有 nums2[0 .. k/2-2] 共计 k/2-1 个
           * 取 pivot = min(pivot1, pivot2)，两个数组中小于等于 pivot 的元素共计不会超过 (k/2-1) + (k/2-1) <= k-2 个
           * 这样 pivot 本身最大也只能是第 k-1 小的元素
           * 如果 pivot = pivot1，那么 nums1[0 .. k/2-1] 都不可能是第 k 小的元素。把这些元素全部 "删除"，剩下的作为新的 nums1 数组
           * 如果 pivot = pivot2，那么 nums2[0 .. k/2-1] 都不可能是第 k 小的元素。把这些元素全部 "删除"，剩下的作为新的 nums2 数组
           * 由于我们 "删除" 了一些元素（这些元素都比第 k 小的元素要小），因此需要修改 k 的值，减去删除的数的个数
           */
  
          int length1 = nums1.length, length2 = nums2.length;
          int index1 = 0, index2 = 0;
          int kthElement = 0;
  
          while (true) {
              // 边界情况
              if (index1 == length1) {
                  return nums2[index2 + k - 1];
              }
              if (index2 == length2) {
                  return nums1[index1 + k - 1];
              }
              if (k == 1) {
                  return Math.min(nums1[index1], nums2[index2]);
              }
              
              // 正常情况
              int half = k / 2;
              int newIndex1 = Math.min(index1 + half, length1) - 1;
              int newIndex2 = Math.min(index2 + half, length2) - 1;
              int pivot1 = nums1[newIndex1], pivot2 = nums2[newIndex2];
              if (pivot1 <= pivot2) {
                  k -= (newIndex1 - index1 + 1);
                  index1 = newIndex1 + 1;
              } else {
                  k -= (newIndex2 - index2 + 1);
                  index2 = newIndex2 + 1;
              }
          }
      }
  }`,
  },
  {
    category: CategoriesEnum.CODE,
    lang: HighlightLangEnum.JAVASCRIPT,
    content: `/**
    * @param {string} s
    * @return {string}
    */
   var longestPalindrome = function (s) {
     let max = 0 // 当前最大回文串的长度
     let start = -1 // 当前最大回文串的起始索引
     const len = s.length // s 的长度
     for (let i = 0; i < len; i++) { // 遍历 s
       let now = 1 // 当前回文串的长度
       let l = i - 1 // 左侧开始遍历的指针
       while (s[i + 1] === s[i]) { // 如果当前字符后边的字符都一样, 当前长度 + 1,  s遍历指针向后推
         now++
         i++
       }
       let r = i + 1 // 获取右侧开始遍历的指针
       while (s[l] === s[r] && s[l] !== undefined) {  // 从连续字符两端开始像两侧扩展,直到越界或者不一致,一致的直接累积到当前长度中,修改左右指针
         now += 2
         l--
         r++
       }
       if (now > max) { // 判断与之前最大的对比,更新当前最大回文串的起始索引
         max = now
         start = l + 1
       }
     }
     return s.slice(start, start + max) // 通过最大长度和起始索引,获取需要的字符串
   };
   `,
  },
  {
    category: CategoriesEnum.CODE,
    lang: HighlightLangEnum.PYTHON,
    content: `class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        def getKthElement(k):
            """
            - 主要思路：要找到第 k (k>1) 小的元素，那么就取 pivot1 = nums1[k/2-1] 和 pivot2 = nums2[k/2-1] 进行比较
            - 这里的 "/" 表示整除
            - nums1 中小于等于 pivot1 的元素有 nums1[0 .. k/2-2] 共计 k/2-1 个
            - nums2 中小于等于 pivot2 的元素有 nums2[0 .. k/2-2] 共计 k/2-1 个
            - 取 pivot = min(pivot1, pivot2)，两个数组中小于等于 pivot 的元素共计不会超过 (k/2-1) + (k/2-1) <= k-2 个
            - 这样 pivot 本身最大也只能是第 k-1 小的元素
            - 如果 pivot = pivot1，那么 nums1[0 .. k/2-1] 都不可能是第 k 小的元素。把这些元素全部 "删除"，剩下的作为新的 nums1 数组
            - 如果 pivot = pivot2，那么 nums2[0 .. k/2-1] 都不可能是第 k 小的元素。把这些元素全部 "删除"，剩下的作为新的 nums2 数组
            - 由于我们 "删除" 了一些元素（这些元素都比第 k 小的元素要小），因此需要修改 k 的值，减去删除的数的个数
            """
            
            index1, index2 = 0, 0
            while True:
                # 特殊情况
                if index1 == m:
                    return nums2[index2 + k - 1]
                if index2 == n:
                    return nums1[index1 + k - 1]
                if k == 1:
                    return min(nums1[index1], nums2[index2])

                # 正常情况
                newIndex1 = min(index1 + k // 2 - 1, m - 1)
                newIndex2 = min(index2 + k // 2 - 1, n - 1)
                pivot1, pivot2 = nums1[newIndex1], nums2[newIndex2]
                if pivot1 <= pivot2:
                    k -= newIndex1 - index1 + 1
                    index1 = newIndex1 + 1
                else:
                    k -= newIndex2 - index2 + 1
                    index2 = newIndex2 + 1
        
        m, n = len(nums1), len(nums2)
        totalLength = m + n
        if totalLength % 2 == 1:
            return getKthElement((totalLength + 1) // 2)
        else:
            return (getKthElement(totalLength // 2) + getKthElement(totalLength // 2 + 1)) / 2`,
  },
  {
    category: CategoriesEnum.CODE,
    lang: HighlightLangEnum.OTHER,
    content: `func longestPalindrome(s string) string {
      if s == "" {
          return ""
      }
      start, end := 0, 0
      for i := 0; i < len(s); i++ {
          left1, right1 := expandAroundCenter(s, i, i)
          left2, right2 := expandAroundCenter(s, i, i + 1)
          if right1 - left1 > end - start {
              start, end = left1, right1
          }
          if right2 - left2 > end - start {
              start, end = left2, right2
          }
      }
      return s[start:end+1]
  }
  
  func expandAroundCenter(s string, left, right int) (int, int) {
      for ; left >= 0 && right < len(s) && s[left] == s[right]; left, right = left-1 , right+1 { }
      return left + 1, right - 1
  }`,
  },

  {
    category: CategoriesEnum.TXT,
    lang: HighlightLangEnum.OTHER,
    content: `反向代理和开发时的 Webpack 代理都是用来解决跨域问题的方法，但两者的应用场景和原理有所不同。
    Webpack 代理是在开发阶段使用的一种解决跨域问题的方法，通常在本地开发环境中使用。它的原理是在 Webpack 中设置代理服务器，将请求转发到真正的服务端地址。例如，在前端代码中发起了一个请求，Webpack 代理服务器会拦截该请求，并将其转发到指定的服务端地址，从而解决跨域问题。Webpack 代理适用于本地开发环境，能够快速地搭建起一个虚拟的服务器，方便开发和调试。
    反向代理则是在项目部署阶段使用的一种解决跨域问题的方法。它的原理是在服务器端设置一个代理服务器，客户端发送的请求会先被代理服务器拦截，代理服务器再将请求转发到真正的服务端地址。例如，将 Nginx 作为反向代理服务器，可以将客户端请求转发到不同的后端服务地址，从而实现多个服务的聚合和负载均衡。反向代理适用于项目部署阶段，可以对请求进行分发和转发，提高服务器的性能和可靠性。
    总之，Webpack 代理和反向代理都是解决跨域问题的有效方法，但适用于不同的场景。开发时可以使用 Webpack 代理来方便地调试前端代码，而在项目部署阶段则需要使用反向代理来对请求进行分发和转发。`,
  },
  {
    category: CategoriesEnum.MARKDOWN,
    lang: HighlightLangEnum.OTHER,
    content: `# 一级标题

    ## 二级标题
    
    ### 三级标题
    
    #### 四级标题
    
    #####  五级标题
    
    ###### 六级标题
    
    # 无序列表和有序列表
    
    - red
    - green
    - blue
    
    1. red
    2. green
    3. blue
    
    # 引用
    
    > 这是一段引用
    
    > 一级引用
    >
    > > 二级引用
    > >
    > > > 三级引用
    
    > #### 这是一个四级标题
    >
    > 1. 这是第一行有序列表项
    > 2. 这是第二行有序列表项
    >
    > ---
    
    # 文本加粗、斜体和删除线
    
    __加粗文本__ 或者 **加粗文本**
    
    *斜体文本* 或者 _斜体文本_
    
    ~~删除文本~~
    
    # 插入图片及链接
    
    图片：<img src="C:\Users\A\Desktop\微信截图_20230223181527.png" alt="训练迭代曲线" style="zoom: 80%;" />
    
    有名字的链接：[百度一下](http://www.baidu.com)
    
    光秃秃的链接<http://www.baidu.com>
    
    # 代码及代码块
    
    这是行内代码 \` console.log('hello,world!')\`
    
    这是代码块和语法高亮：
    
    \`\`\` javascript
    let obj = new Person();
    obj.name = 'jiabin';  
    \`\`\``,
  },
]

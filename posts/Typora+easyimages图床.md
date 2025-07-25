---
title: Typora+简单图床的自定义上传命令
date: 2025-07-21 09:26:29
cover: [https://tc.cuirx.de/i/2025/07/24/za3w5j.webp]
author: cuirx
categories: 随记
---
之前用的图床挂了，自己大了个简单图床使用，以下是typora+简单图床的自定义上传命令：

```python
import sys
import os
import requests
import time
import mimetypes

# ===== 修复Windows控制台乱码问题 =====
if sys.platform == 'win32':
    # 强制设置控制台编码为UTF-8
    os.system('chcp 65001 > nul')
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')  # Python 3.7+
    elif sys.version_info < (3, 7):
        import io
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    os.environ['PYTHONIOENCODING'] = 'utf-8'

# 配置参数
token = "your_token_value_here"         # 替换为你的实际token
api_url = "http://127.0.0.1/api/index.php"  # 图床API地址

# 存储成功上传的URL列表
success_urls = []

# 检查命令行参数
if len(sys.argv) < 2:
    print("错误：请提供至少一个图片文件路径作为参数")
    print("使用示例：")
    print("  python easy.py \"C:\\path\\to\\image1.png\" \"C:\\path\\to\\image2.jpg\"")
    sys.exit(1)

# 从命令行参数获取图片路径
image_paths = []
for arg in sys.argv[1:]:
    # 处理可能被引号包裹的路径
    cleaned_arg = arg.strip('"')
    if os.path.exists(cleaned_arg):
        image_paths.append(cleaned_arg)
    else:
        print(f"警告：忽略无效路径参数 '{arg}'")

if not image_paths:
    print("错误：未找到有效的图片路径")
    sys.exit(1)

print(f"准备上传 {len(image_paths)} 张图片...")

# 遍历所有图片路径
for i, image_path in enumerate(image_paths):
    # 验证图片文件是否存在
    if not os.path.isfile(image_path):
        print(f"错误：图片文件不存在 '{image_path}'")
        continue
    
    try:
        # 获取文件名（仅用于显示）
        filename = os.path.basename(image_path)
        
        # 获取文件MIME类型
        mime_type, _ = mimetypes.guess_type(image_path)
        if not mime_type:
            mime_type = 'application/octet-stream'
        
        # 以二进制模式打开图片文件
        with open(image_path, 'rb') as image_file:
            # 构建multipart/form-data格式数据
            files = {'image': (filename, image_file, mime_type)}
            data = {'token': token}
            
            # 发送POST请求
            print(f"正在上传 ({i+1}/{len(image_paths)}): {filename}...")
            start_time = time.time()
            
            try:
                response = requests.post(api_url, files=files, data=data, timeout=30)
            except requests.exceptions.Timeout:
                print(f"✗ 上传超时: {filename}")
                continue
            except requests.exceptions.RequestException as e:
                print(f"✗ 网络请求异常: {filename} - {str(e)}")
                continue
            
            # 计算上传耗时
            upload_time = time.time() - start_time
            file_size = os.path.getsize(image_path)
            speed = file_size / (1024 * upload_time) if upload_time > 0 else 0
            
            # 处理响应结果
            if response.status_code == 200:
                # 尝试解析JSON响应
                try:
                    result = response.json()
                    if result.get('code') == 200:  # 根据图床返回结构判断
                        image_url = result.get('url', '')
                        if image_url:
                            success_urls.append(image_url)
                            # print(f"上传成功: {filename} (耗时: {upload_time:.2f}s, 速度: {speed:.2f}KB/s)")
                        else:
                            print(f"上传成功但未获取到URL: {filename}")
                    else:
                        error_msg = result.get('msg', '未知错误')
                        print(f"✗ 上传失败: {filename} - {error_msg}")
                except ValueError:  # 非JSON响应处理
                    print(f"非JSON格式响应: {filename}")
                    print("原始响应:", response.text[:200])  # 只显示前200字符
            else:
                print(f"请求失败: {filename} - 状态码: {response.status_code}")
                print("错误详情:", response.text[:200])  # 只显示前200字符

    except IOError as e:
        print(f"文件读取错误: {filename} - {str(e)}")
    except Exception as e:
        print(f"处理图片时出错: {filename} - {str(e)}")

# 所有图片处理完成后，输出成功上传的URL
if success_urls:
    print("\nUpload Success:")
    for url in success_urls:
        print(url)
else:
    print("\n没有图片上传成功")
```


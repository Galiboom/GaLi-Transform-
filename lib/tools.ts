export type ToolCategory = 'qr' | 'markdown' | 'document' | 'image' | 'media' | 'archive';

export type ToolSpec = {
  id: string;
  name: string;
  group: string;
  category: ToolCategory;
  description: string;
  beta?: boolean;
  input: string[];
  output: string[];
};

export const tools: ToolSpec[] = [
  {
    id: 'qr-decode',
    name: '二维码识别',
    group: '二维码',
    category: 'qr',
    description: '上传二维码图片，解析为 URL 或文本。',
    input: ['PNG', 'JPG', 'WEBP'],
    output: ['URL', '文本'],
  },
  {
    id: 'qr-encode',
    name: '二维码生成',
    group: '二维码',
    category: 'qr',
    description: '把网址或文本生成可下载的二维码图片。',
    input: ['URL', '文本'],
    output: ['PNG'],
  },
  {
    id: 'md-pdf',
    name: 'Markdown 转 PDF',
    group: 'Markdown',
    category: 'markdown',
    description: '将 Markdown 渲染为适合分享和归档的 PDF。',
    input: ['MD', 'Markdown'],
    output: ['PDF'],
  },
  {
    id: 'md-docx',
    name: 'Markdown 转 Word',
    group: 'Markdown',
    category: 'markdown',
    description: '将 Markdown 导出为可编辑的 Word 文档。',
    input: ['MD', 'Markdown'],
    output: ['DOCX'],
  },
  {
    id: 'doc-pdf',
    name: 'Office 转 PDF',
    group: '文档',
    category: 'document',
    description: 'Word、Excel、PPT 文件转换为 PDF。',
    input: ['DOCX', 'XLSX', 'PPTX'],
    output: ['PDF'],
  },
  {
    id: 'pdf-docx',
    name: 'PDF 转 Word',
    group: '文档',
    category: 'document',
    description: '仅支持可选择文本的 PDF，Beta 版本。',
    beta: true,
    input: ['PDF'],
    output: ['DOCX'],
  },
  {
    id: 'image-convert',
    name: '图片格式互转',
    group: '图片',
    category: 'image',
    description: 'PNG、JPG、WEBP 互转，保留常见尺寸和透明度策略。',
    input: ['PNG', 'JPG', 'WEBP'],
    output: ['PNG', 'JPG', 'WEBP'],
  },
  {
    id: 'image-compress',
    name: '图片压缩',
    group: '图片',
    category: 'image',
    description: '压缩体积，适合网页和移动端分发。',
    input: ['PNG', 'JPG', 'WEBP'],
    output: ['压缩版'],
  },
  {
    id: 'image-pdf',
    name: '图片转 PDF',
    group: '图片',
    category: 'image',
    description: '将多张图片合并为一个 PDF。',
    input: ['PNG', 'JPG', 'WEBP'],
    output: ['PDF'],
  },
  {
    id: 'mp4-mp3',
    name: 'MP4 转 MP3',
    group: '音视频',
    category: 'media',
    description: '提取音轨，适合剪辑和播客素材处理。',
    beta: true,
    input: ['MP4'],
    output: ['MP3'],
  },
  {
    id: 'video-mp4',
    name: '视频转 MP4',
    group: '音视频',
    category: 'media',
    description: 'MOV、AVI、MKV 转 MP4。',
    beta: true,
    input: ['MOV', 'AVI', 'MKV'],
    output: ['MP4'],
  },
  {
    id: 'zip-pack',
    name: '多文件打包 ZIP',
    group: '压缩',
    category: 'archive',
    description: '把多个文件快速打包下载。',
    input: ['多文件'],
    output: ['ZIP'],
  },
];

export const toolsByGroup = Array.from(new Set(tools.map((tool) => tool.group)));

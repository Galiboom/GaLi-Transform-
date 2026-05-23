export type JobStatus = 'queued' | 'processing' | 'success' | 'failed' | 'timeout' | 'expired';

export type JobRecord = {
  id: string;
  tool: string;
  fileName: string;
  status: JobStatus;
  progress: number;
  updatedAt: string;
  result?: string;
  message?: string;
};

export const jobs: JobRecord[] = [
  {
    id: 'job_01hzt1',
    tool: 'Markdown 转 PDF',
    fileName: 'guide.md',
    status: 'success',
    progress: 100,
    updatedAt: '2026-05-23 09:08',
    result: 'guide.pdf',
  },
  {
    id: 'job_01hzt2',
    tool: 'PDF 转 Word',
    fileName: 'contract.pdf',
    status: 'processing',
    progress: 64,
    updatedAt: '2026-05-23 09:19',
  },
  {
    id: 'job_01hzt3',
    tool: '二维码识别',
    fileName: 'qr.png',
    status: 'failed',
    progress: 100,
    updatedAt: '2026-05-23 08:52',
    message: '未识别到可读二维码内容。',
  },
  {
    id: 'job_01hzt4',
    tool: 'MP4 转 MP3',
    fileName: 'interview.mp4',
    status: 'queued',
    progress: 12,
    updatedAt: '2026-05-23 09:22',
  },
];

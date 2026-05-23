export type JobStatus = 'queued' | 'processing' | 'success' | 'failed' | 'timeout' | 'expired';

export type JobRecord = {
  id: string;
  toolId: string;
  toolName: string;
  fileName: string;
  status: JobStatus;
  progress: number;
  updatedAt: string;
  createdAt: string;
  expiresAt: string;
  resultFileName?: string;
  resultSize?: string;
  message?: string;
  downloadId?: string;
};

export const jobs: JobRecord[] = [
  {
    id: 'job_01hzt1',
    toolId: 'md-pdf',
    toolName: 'Markdown 转 PDF',
    fileName: 'guide.md',
    status: 'success',
    progress: 100,
    updatedAt: '2026-05-23 09:08',
    createdAt: '2026-05-23 09:05',
    expiresAt: '2026-05-24 09:05',
    resultFileName: 'guide.pdf',
    resultSize: '1.8 MB',
    downloadId: 'file_out_7f4d2c',
  },
  {
    id: 'job_01hzt2',
    toolId: 'pdf-docx',
    toolName: 'PDF 转 Word',
    fileName: 'contract.pdf',
    status: 'processing',
    progress: 64,
    updatedAt: '2026-05-23 09:19',
    createdAt: '2026-05-23 09:17',
    expiresAt: '2026-05-24 09:17',
    downloadId: 'file_out_b29a11',
  },
  {
    id: 'job_01hzt3',
    toolId: 'qr-decode',
    toolName: '二维码识别',
    fileName: 'qr.png',
    status: 'failed',
    progress: 100,
    updatedAt: '2026-05-23 08:52',
    createdAt: '2026-05-23 08:50',
    expiresAt: '2026-05-24 08:50',
    message: '未识别到可读二维码内容。',
  },
  {
    id: 'job_01hzt4',
    toolId: 'mp4-mp3',
    toolName: 'MP4 转 MP3',
    fileName: 'interview.mp4',
    status: 'queued',
    progress: 12,
    updatedAt: '2026-05-23 09:22',
    createdAt: '2026-05-23 09:22',
    expiresAt: '2026-05-24 09:22',
  },
];

export function getJobById(jobId: string) {
  return jobs.find((job) => job.id === jobId) ?? null;
}

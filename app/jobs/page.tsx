import Link from 'next/link';
import { CircleAlert, CircleCheckBig, CircleDashed, Clock3, LoaderCircle, Slash } from 'lucide-react';
import { Glass, Shell, Tag } from '@/components/ui';
import { jobs, type JobStatus } from '@/lib/jobs';

const statusMeta: Record<JobStatus, { label: string; icon: React.ElementType; tone: string }> = {
  queued: { label: '排队中', icon: CircleDashed, tone: 'text-muted' },
  processing: { label: '处理中', icon: LoaderCircle, tone: 'text-accent' },
  success: { label: '成功', icon: CircleCheckBig, tone: 'text-success' },
  failed: { label: '失败', icon: CircleAlert, tone: 'text-danger' },
  timeout: { label: '超时', icon: Clock3, tone: 'text-accent2' },
  expired: { label: '已过期', icon: Slash, tone: 'text-muted' },
};

export default function JobsPage() {
  return (
    <Shell>
      <main className="mx-auto max-w-6xl px-4 py-4">
        <div className="mb-4 flex items-center justify-between">
          <Link href="/" className="text-sm text-muted transition hover:text-text">
            返回首页
          </Link>
          <Tag>任务状态页</Tag>
        </div>

        <Glass className="p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl font-semibold">任务状态</h1>
              <p className="mt-1 text-sm text-muted">排队、处理中、成功、失败、超时和过期都在这里查看。</p>
            </div>
            <div className="text-sm text-muted">随机 ID 下载，不暴露真实路径</div>
          </div>

          <div className="mt-5 grid gap-3">
            {jobs.map((job) => {
              const meta = statusMeta[job.status];
              const Icon = meta.icon;
              return (
                <div key={job.id} className="rounded-lg border border-line bg-white/5 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-medium">{job.toolName}</div>
                      <div className="mt-1 text-sm text-muted">
                        {job.fileName} · {job.id}
                      </div>
                    </div>
                    <div className={`inline-flex items-center gap-2 text-sm ${meta.tone}`}>
                      <Icon className="h-4 w-4" />
                      {meta.label}
                    </div>
                  </div>

                  <div className="mt-3 h-2 rounded-full bg-white/8">
                    <div className="h-2 rounded-full bg-accent" style={{ width: `${job.progress}%` }} />
                  </div>

                  <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-sm text-muted">
                    <span>进度 {job.progress}%</span>
                    <span>更新时间 {job.updatedAt}</span>
                  </div>

                  <div className="mt-3 grid gap-2 text-sm md:grid-cols-3">
                    <div className="rounded-md border border-line bg-white/5 px-3 py-2 text-muted">
                      创建时间：{job.createdAt}
                    </div>
                    <div className="rounded-md border border-line bg-white/5 px-3 py-2 text-muted">
                      过期时间：{job.expiresAt}
                    </div>
                    <div className="rounded-md border border-line bg-white/5 px-3 py-2 text-muted">
                      工具：{job.toolId}
                    </div>
                  </div>

                  {job.message ? <div className="mt-3 text-sm text-danger">{job.message}</div> : null}
                  {job.resultFileName ? (
                    <div className="mt-3 text-sm text-success">
                      结果文件：{job.resultFileName}
                      {job.resultSize ? ` · ${job.resultSize}` : ''}
                    </div>
                  ) : null}
                  {job.downloadId ? (
                    <div className="mt-2 text-sm text-muted">下载 ID：{job.downloadId}</div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Glass>
      </main>
    </Shell>
  );
}

import Link from 'next/link';
import { ArrowRight, FileStack, Image, LayoutGrid, LucideIcon, QrCode, Upload, Video } from 'lucide-react';
import { Button, Glass, Shell, Tag } from '@/components/ui';
import { tools, toolsByGroup } from '@/lib/tools';

const iconMap: Record<string, LucideIcon> = {
  qr: QrCode,
  markdown: FileStack,
  document: FileStack,
  image: Image,
  media: Video,
  archive: LayoutGrid,
};

export default function HomePage() {
  return (
    <Shell>
      <main className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col gap-6 px-4 py-4 md:px-6">
        <header className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-line bg-panelSoft px-4 py-3 backdrop-blur-[18px]">
          <div>
            <div className="text-lg font-semibold tracking-tight">GaLi Transform</div>
            <div className="text-sm text-muted">上传、转换、下载，一条线完成。</div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/5 px-3 py-2 text-sm font-medium transition hover:bg-white/10"
            >
              <ArrowRight className="h-4 w-4" />
              任务状态
            </Link>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          <Glass className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Tag>工具矩阵</Tag>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight">多格式转换工作台</h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                  二维码、Markdown、文档、图片、音视频与压缩任务都在这里直接处理，前台先看见能力，再进入具体工作流。
                </p>
              </div>
              <div className="hidden rounded-lg border border-line bg-white/5 px-3 py-2 text-right text-xs text-muted md:block">
                24h 自动删除结果
                <br />
                随机 ID 下载
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {tools.map((tool) => {
                const Icon = iconMap[tool.category];
                return (
                  <Link
                    key={tool.id}
                    href={`/tools/${tool.id}`}
                    className="group rounded-lg border border-line bg-white/5 p-4 transition hover:border-[rgba(159,231,245,0.35)] hover:bg-white/8"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md border border-line bg-black/20 p-2">
                          <Icon className="h-4 w-4 text-accent" />
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h2 className="text-sm font-semibold">{tool.name}</h2>
                            {tool.beta ? <Tag>Beta</Tag> : null}
                          </div>
                          <div className="text-xs text-muted">{tool.group}</div>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted transition group-hover:translate-x-0.5 group-hover:text-text" />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted">{tool.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {tool.input.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
          </Glass>

          <div className="grid gap-4">
            <Glass className="p-5">
              <Tag>快速开始</Tag>
              <div className="mt-3 rounded-lg border border-dashed border-line bg-black/15 p-5 text-sm text-muted">
                直接选择文件，或者拖拽到当前工具页。转换后生成随机 ID 下载链接，适合短期处理和归档。
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button>
                  <Upload className="h-4 w-4" />
                  选择文件
                </Button>
                <Button>开始转换</Button>
              </div>
            </Glass>

            <Glass className="p-5">
              <Tag>任务摘要</Tag>
              <div className="mt-4 space-y-3">
                {['queued', 'processing', 'success', 'failed'].map((status, index) => (
                  <div key={status} className="flex items-center justify-between rounded-lg border border-line bg-white/5 px-3 py-2 text-sm">
                    <span className="text-text">任务 {index + 1}</span>
                    <span className="text-muted">{status}</span>
                  </div>
                ))}
              </div>
            </Glass>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
          <Glass className="p-5">
            <Tag>产品结构</Tag>
            <div className="mt-4 grid gap-3">
              <div className="rounded-lg border border-line bg-white/5 p-4">
                <div className="text-sm font-medium">工具矩阵</div>
                <div className="mt-1 text-sm text-muted">所有转换能力的入口总览。</div>
              </div>
              <div className="rounded-lg border border-line bg-white/5 p-4">
                <div className="text-sm font-medium">单工具工作台</div>
                <div className="mt-1 text-sm text-muted">每个工具都有自己的上传、参数和结果区。</div>
              </div>
              <div className="rounded-lg border border-line bg-white/5 p-4">
                <div className="text-sm font-medium">任务状态页</div>
                <div className="mt-1 text-sm text-muted">追踪排队、处理中、成功、失败、超时与过期。</div>
              </div>
            </div>
          </Glass>

          <Glass className="p-5">
            <Tag>工具分组</Tag>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {toolsByGroup.map((group) => (
                <div key={group} className="rounded-lg border border-line bg-white/5 p-4">
                  <div className="text-sm font-medium">{group}</div>
                  <div className="mt-1 text-sm text-muted">
                    {tools.filter((tool) => tool.group === group).length} 个转换能力
                  </div>
                </div>
              ))}
            </div>
          </Glass>
        </section>
      </main>
    </Shell>
  );
}

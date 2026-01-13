import { ProjectIdLayout } from "@/features/projects/components/project-id-layout";

const layout = async ({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ projectId: string }>
}) => {
    const { projectId } = await params;

    return (
        <ProjectIdLayout
            projectId={projectId}
        >
            {children}
        </ProjectIdLayout>
    );
}

export default layout;
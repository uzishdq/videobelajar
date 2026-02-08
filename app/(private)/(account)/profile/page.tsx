import FormStatus from "@/components/form/form-status";
import ProfileForm from "@/components/form/profile-form";
import { getUser } from "@/server/data/user-data";

export default async function ProfilePage() {
  const user = await getUser();

  if (!user.data) {
    return <FormStatus message={user.message} />;
  }

  return (
    <section className="w-full">
      <ProfileForm data={user.data[0]} />
    </section>
  );
}

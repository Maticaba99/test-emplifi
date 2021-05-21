import { ExecutiveTeamMemberGroup, ExecutiveTeamMember, ExecutiveTeamMemberSocialIcon, Icon } from '@/Storybook/index';

// Interfaces
import { UiTeamMembers } from '@/interfaces/blocks';

export function UiTeamMembersComp(props: { block: UiTeamMembers }) {
  const { block } = props;
  return (
    <ExecutiveTeamMemberGroup
      membersChildren={
        block.teamMembersCollection.items.length > 0 &&
        block.teamMembersCollection.items.map((item, index) => {
          return (
            <ExecutiveTeamMember
              key={index}
              imgSrc={item.image.url}
              imgAlt={item.image.description}
              imgTitle={item.image.title}
              name={item.name}
              role={item.role}
              text={item.bio}
              socialMediaChildren={
                item.socialLinksCollection.items.length > 0 &&
                item.socialLinksCollection.items.map((link, subIndex) => {
                  const target = link.target || '_blank';
                  return (
                    <ExecutiveTeamMemberSocialIcon
                      key={subIndex}
                      anchor={true}
                      href={link.externalLink}
                      target={target}
                      iconChildren={<Icon name={link.icon} size={20} colour="#1A4073" />}
                    />
                  );
                })
              }
            />
          );
        })
      }
    />
  );
}

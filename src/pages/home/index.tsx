import IGHeader from "components/IGHeader";
import IGContainer from "components/IGContainer";
import IGUser from "components/IGUser";
import IGStory from "./components/IGStory";

import IGPost from "./components/IGPost";

import IGProfile from "./components/IGProfile";

const IGPostList: React.FC = () => {
  const data = [
    {
      id: 1,
      location: "咪咪貓貓",
      account: "Claire_1994",
      avatar: "/images/avatars/a1.png",
      photo: "/images/posts/main1.png",
      likes: 999,
      description: "吸貓！",
      hashTags: "#貓貓",
      createTime: "1 HOURS AGO",
    },
    {
      id: 2,
      location: "胸毛生活泡沫綠茶聯名",
      account: "__0831_xxx__",
      avatar: "/images/avatars/a2.png",
      photo: "/images/posts/main2.png",
      likes: 333,
      description: "生活需要甜還有很多錢！",
      hashTags: "#胸毛公寓",
      createTime: "5 HOURS AGO",
    },
    {
      id: 3,
      location: "Taipei",
      account: "gogogo_0214",
      avatar: "/images/avatars/a3.png",
      photo: "/images/posts/main3.png",
      likes: 777,
      description: "限定南瓜義大利麵",
      hashTags: "#蘇蘇",
      createTime: "6 HOURS AGO",
    },
    {
      id: 4,
      location: "戰利品",
      account: "zoe_0000",
      avatar: "/images/avatars/a4.png",
      photo: "/images/posts/main4.png",
      likes: 824,
      description: "錢錢變成自己喜歡的！",
      hashTags: "#錢包在哭泣",
      createTime: "7 HOURS AGO",
    },
    {
      id: 5,
      location: "七股區",
      account: "zoe_0000",
      avatar: "/images/avatars/a5.png",
      photo: "/images/posts/main5.png",
      likes: 98,
      description: "第一次登山!!!",
      hashTags: "#好山好水好無聊!?",
      createTime: "10 HOURS AGO",
    },
  ];

  return (
    <>
      {data?.map((item) => {
        const {
          id,
          location,
          account,
          avatar,
          photo,
          likes,
          description,
          hashTags,
          createTime,
        } = item;
        return (
          <IGPost
            location={location}
            account={account}
            avatar={avatar}
            photo={photo}
            likes={likes}
            description={description}
            hashTags={hashTags}
            createTime={createTime}
            key={id}
          />
        );
      })}
    </>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className="flex lg:justify-center">
          <div className="w-full lg:w-[600px]">
            <IGStory /> <IGPostList />
          </div>
          <div className="hidden lg:block lg:w-[424px]">
            <IGProfile />
            <IGUser />
          </div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;

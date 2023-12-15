import { UsersPageType, UsersPropsType } from "./store";

const url = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///9KdqhHdKf7/P1OeapLd6nt8fb3+fvp7/WywtfT3upQe6uQqslfhrNEcqbz9vl2l71Yga9ojLadtM/c5O69zd/G0+NiiLSWr8zh6PCAnsGjudJwk7rP2ueasc25yt2rv9aGo8Q6bKJ+mr5ha4f1AAAV6ElEQVR4nN1diZazKhJWcN/3JWrUP+//joMJhZilW8B0MrfOnDNz57aED4raKTTtrYQxtq2imrrglGR1mKaGbqRpWGfJKeimqrBs8hfvncLbCMeWU5T5KfMjhJCuk/9saPm/EIr87JSXhWPF/184bacd3CapfcMwTf0HIjBNwzD8Omlcr3XsT098Hy1MGSSp7xvLLv2ED2CSPzJ8P00CwrbOl+8ldoYxPy1798iWv8AkKA0/JHs5fDFIZ3CDPvVNUXQblGkfEJCfhvKMbM9t+vSHvUM3jryKndfsS/7FFaT3ZWcSt2XTG8+mDZCISPGJmgjrug6J0vDN9d8+foWQ0Tdl+zXcimPPncOHmS7/h2kSCbLovibvJnccy7KqqrIcR3fq8mbRkekib8n+PnwchbPrWd8AEltDlxCdd78NpuGndTLn01gNhRM/Mp0dO8VQlW4XXBacD1qF6Mokrz6OETvVufe38NAVXR90Y+W18a9D2ATo2M39gvKODyIjO1cfFa3YqoLsQWoYRj27y74JjLTspzvXi5a5W6ws+OA+2lVQm/cHyMzyqrVkJKFttdU5Mx8Yog6qDwlWb043uoFIhyg9e0+O3H6yY69Jo4hnC/I/09k7bNb7yQo2q71IzjAvjuAnXJxDfSuakR5YB4wsMglrSjfchIz0VB43ibgKUmP7A+n0lyInrpKNSEB+n3vH+j+xl/fp5kT6SfVX+4i9POQ5FKWXqRARnPsoLqYTzyhE5Jy9P9lGZ0x8TsCgdHbfgG8hu3BnDiMi2zi+3ybH3pnXEGT/3OJ9stxe9pE/7WQb36w54pL8IgBEyE+mN/8iwZj4TK6SbTyV72EYSm3HaWSkZ/kfODm2l2fcqTCzrn3fjw2n1UNCqG6Gv7E17KGpV4zImIc3CRy77DfC+0D99xtZ5cnnfrsv37K0lhuudoZR539rSBVdzVQwQqF7/OriNuecJP9UvfW8PyG74rYR+fnREQBcBKsVhdL8jYf9JbVdyOmN+WDtP1xWHzzK3nMMfiW76qP1MCaHHpOq5lTS/MdmPkfWzCnjujpsXDwZK75s/GhUwV31BvKng3gpnlbDyTh9yt+mZA+cwEmnQ+SdM60HPA0+Hqm1i2Zd8HA6wBJ3upoJsLCTk9E4ttq28AZCVVUt/+UVbSuZUcNEpjKxXnfKEK2uBika1TIrZrVeNXbn4JT02TXcfU2Q9skpOO8MNz4Q4SqQqaYyxHhaAWaj6GyuqaggqZdU2xLZhtD2Eg03loRanQTdKJ5sit0aMYhqZxGzM0iEs6AWxNdUlH8LgT5NTlxFl+Ffk01iIO1yVV+hkkRdpajZi2kfe8llrLv2mtDyR0uOQmyeVc9GTiehL7fDMGPXTyqRVY6HLjGeZZVewURG0g0i7Ia5YJgvq/rxwLhdDCDxy/v96BjIfhKJhywQ6W+gTM5GxUUCI5giALEzXu5j/fswmpdR4DwSiMCo6CIVim5nmCfqRQB6QfqwgeSwRcgnWiLr+z4jWsMn//x4RBGxKEQg9mwLAglFbeXA51EtArDMNjNHKPqH6lPuVl5BtDylovAqNz/V6F90F73PShGI7BgZubA7YLvg8BJnaf9n8eRvsir/oqzzHCu2H+eN7dhyhi4jK8AviC+i38qaqn7ku6I6owTLCNXj/m+dhvOTl2z86DzBxhO2nbHnxS7yz/utFNtl0wwFNn+hoV8V6v41bRtm9yPdyHJv36exl2dcGN1v9kcQ4tUk6YfdXy1TPTF1KmD3OTkzEJCRdcVuyxrHXtevu5/mAr/ZpbCks0BoJe4MYBmx9WTOadoMQrlpbA0NS1EgMb6BpTG63V8ReQg/dtkvvclXJpOI4sk+7ExMCpsCEhV7J1iY/V95J5hqJuDRF2BjEM0tFWuMqwv4HkZS7P7MBp2BzNPO4JRzZvJCQIziANSLkUgG+rCXrKdj/xC2y87GPjGMR3Dqo1lgphVIGUMhzMcg6qmAZMQzOMT1rjCZl4C1lgm4z3ZCf8QUk9p3NDCIiYAGdzLG3TtW12LR+1DEKSmBs2sBC+jZOMBAvsg4VQjcnf8qAYitBz/RifgyIND8XC0YZzMhIHJE7Jwt8K82tAU8apxEchMeyLNeNaPR0hQeqkWOc3syQI7/ZoJPwKNiMXMwEdJc5KvnQ6X0THUiXwHrIcP9+Q8tsIGEeFSzLnQLE/WklEMd7+jX3eApZuIj/fmzAEz1036VSwjiHWmnntTA1LpFtZBQLi4w9eCnP/N0OARiEpGmblB/RMaL+jW/8tsdleAOmz9sjj1TZtMbIZfZbm4q1zwk8WbNt5lGjZBYthqw+V5LYQx2CcrEtHZ7uiFMD0l32SBrhKQ52XvwF9KXQtIKJJWaR/kqEwqqviJwbSJBnl+V4qtSTabskahlWd0cQyTgEfxEsGBCRtXyHYQ/X620E1CnKZ3EtgKPPmWrY+rq2suN6X3B0ItNkxDIDJ5OBFdgv4ppiiX1TO+MHFTIS0UN0l1BpvdALT/fROsMWygamMNudLMSxCTwS7JoZUskitB2YRPPT2bCIshoFj1NeKIIxcOyT8k63+yTSPC0ELUP6q5/UvoWdzQIIbyFgFD/PEK2ic+iUiCI0EVYIB7Opc0NIRLl0tV2ix7VAXapMhGKqsO31Mw6StJAgFAcYdwBjIdvWxrrQL24TnsXQok91AoqTaKH+DDNUyDj9zDAA30Twjin34Z3vkPc0FOYSngH34RQ82jo/N5u95iqkIjlHo9QWtKQvWIKY7tXLl01XcZ2PhxhoLCHuKRO1Na9dKhvj0KZcPxXIdRimh9CDW+cQrowkgokfRdC7QxagXNyMTUF9EjK/fkyhN4/nRpn6+dOAMFAubqUwxEqSBoyHbDcOB9qgCjsWWpGX7aHGtV8OsemI2VSUy5U9m0IPeDIkY1IbXk9kytk/DaEcXbjyNXXKS4GtdjkQmXfhtCmvrzB3CSam0KGZI3ftyFkNZWQe7Gnm8dh1pJJh69D2NLCZriu4NwGRIZsxPrrEFozRUT1RdvfNlW8NIzS1yG0aR7FoKmwgeoKkeKADX0dwhWSd5sfPYYS3v2N7OlNCKXTIEVPD+K1NiO+eWMbI0eIMA1iHY9QtjBHc+AgNouGt2iBh7+/LOxuuMZ8E0KzkVz0uLvZMMY1j+zc8jEolSwTwSWU3BmHRROhNCqVTWaNdE71skQFjb9lkvoevGcygvClmucUjxkdEcmenIqO4C+ypbzxmClbrDXQ5UL1YdePLbj1g2Tlu5eYNz4vl8KAG9O/yEj9SngCh/OYy4BXYlce/wkH9m/UzmBqYw3fSi331Es9JSegQYODkod0VFqkHEmuOxSfGDNBmFGEYpUPjFrIdxx6/dkeoUBHUknTyiezx5pN87eruyhGxS2vitAxGW42LKKlAZLDgjBNbc1iaVO5oWhFGzKO7RzjUJUoVN3GESS0dYssFmUHyaE8Gp48HOFtWqGshIfDU2gVxSqavAf6UoQFLQdFlUarDHRZ3fqlCB1aG4RcLafmQyOpzb4UodVQXLkGdVCytb1fitBmO6fRZJQuVK/K0Zci1DrKpbN2q7FHxiQ50rcinGg1d6KBES5p0nwtQrg/mWm0Wk/WpPlahJCpqLXwP44w1CAqJXsR5FsRlgBMo4b3fXHGbvpahOEdQunLPF+LkIYJfI2OJN10CW7LmO9BKOtbaHAr0VDfQ+o9oWMbnLW6mvfE7WGqeA4LqCw+tJkhHqDuR9axhuv2qbIshZsISDLO85zinMZpBG8krLTKUlV9GOf0AqdIb4nfCA/UEImk123Vh6o2jTbSKivzdFizTxvuZ1/jnZLTYjaNql3KKjqRfzqkWTOO2/Hiqx5DDSqCM/AtzEl2qLiDe8NGL5tj5cj2pjlj995ls0W8b6HqH3JXVXR9VleK3iU1WGcd+WvhePUPoYBIXhTGEJs85HYe1/4FpfKpHvDxUQO+sOB9vA05rFlPKH2ageJZZ2QIdAC5Jxan6ZRjbQs5tKhXNwNVjcEiuQSgQKOaxymtsTbVeOmVYOXVr3J3IEX1VOl+Chcv9SDmrdIKAdIE8uYtJcg56f5FrU+qt8a8VfMWN2ppfsZvVEZhl86RL9JO5+lAYC5bmp2C3FIaEe7F9UpK387BLVTiKG2Te2L5w0lpRDg/0hb8lTxaymteVM146JzQYw2zfLDSoHCRQ1eRptiF2lfpaihKkAM2lxwwzeNLFwxRgpOtovRbaAEjb45Sojd+r3l8rTTUajEo0RJOPZU3/3BJAfpnVSblazG0AoLDau2xHWicdpGWgg7cn1O/9V5BIfTCDM6t3FRVmGozu4MqOQCu4O6g4oHRmCg1r22SrAsVpvKeypWgz48p62A4EA8R6Q75nKCuzTwtyiu+3YVDqitnnegmSga18AgFgKranit7vh5o9fpSmCF0+5LbRAdaNaYCPdRe0La+dC2oVezE3yb0YUqpmn97pNVjwg0PnlC1LXtuE6rzFTuT2C49iVEivokYsgO6dMUlN5O7Om+4lCpdqw8E7aj0SNwvYDWckWzVLEcWtdPg+rwNBzFTPOH2CG3TalFGg1YB8vWWPLW0RyW7sq56Z2YdGXRiFIhpHsw6wkaKOutKFZ0GSzfRe0+6Ida26JEw65hnih2mFtpKinbdeUo2raJe7z1ZZ2qaSt5dW8k5U4Riody1V66vrinIcNRK89cOJ+AuSt4/5GhgPRpFYnesrlu2YHZLHhzp1Q71qNcieYeUI9ZLVKQoeoBXAI7phqad6ZnmvCUHHnMKlVXR2mN595tJTMlINI55Rs/uAa93uZXXcO3FZO60TTB0u5S/tbOlZ3e51/v4iqEy7Vpmz6J3uzgiTqCD7DE8qgVP7uOvPRVSdW3UQrR5N0L62+ExL0lZsMJbWUfNGrm+GFsCPhVFqJ4RuP08C4VsPXql3iZ3RN/FEEUon6PdDnd6LpfttT+N8kp+FCEGX/ChryS9gEZv7CnRRxHG0L3nITTdzmAYKvufH0VY0AcEH/tEscy++gWtTyKMp5e9vtYuteL92u5H+iBC1q/tCQpWUqHcZvWDCFn3y2ehUfnWl/f0QYQFUxXPquys80Gb+DmEawPTZ70vj9vEzyH0YAtf/DRrV5gKdSt/oI8hZC2WX7nf7IEohVKkhT6GkIWzXpZJSveC3hLrDL2vptamC6KYZidLdQZP+mXnA+l+3nejhNQ62skJ9PCYqr4p18/75dKynuymQg2YTaus0N5UKfxoombzrz3Zgx84sKDbTLxR6V+iZdH7YxIdFNOrRbtH9qjvj6qAvY0gLWxoK5clTLLTwKX9zq91E/LEakB/icQ4EAKQLT5hfUD2RwZjljhUkKa737fQ2BPccldMWK2pSNtkeK6NnA1pv4blE369SGmdpN6ZuVE8rC9K79QVC0ElFIGYSz23uTSqh+zs6deFXd8KElWKtpf3oJGQLlA7SWwRCCP7SSeDkX8r6Nc/5hhajE+LLknh/efFPxOYaAFZuRtG8VARXB/Z17+EvdmFRN7ssqbL+uS5HoVCd4Qw934x0lOyjwIfa6Jvdml4zQTNe/nUGrlX63Uk/GSmXfbc+6zI73ORfbTZu2vZvuQce5cMoV2ZEmxVwfqeu77UrQh3conL3uRGIBi73c8fEw0ModC9h98DeYrqHe8fWsM54184NtNZ4NVEoLg6cU+RLhgvU7FLd/DvH+7lbpE3LOOi6/2ITQ3pfj9JSXxcbJ5bXXZkF0bsXeADgWox1n8f+T8/lmy3LlxRovjqvQ/IPpI1BPUGo74DI24DdilJpMihneGXfnrXFVvlKeVX3SAMqhJtJRhDg4eI0mRqf2R59n6t2Fuy/HvAryPE9jCn/GyQn5Sql9fImNttXLj+h1dbWVMw0feAuTe+UPhcoOJ25pcb6UZ/TEM6b7NuZOH0+iVGhTed+Xe56ye+InbOKOKnYWR7naXfaZjDjchBEWGkp/MfFd7l5t5WRw+BHbud0g0+M+uO6re3EB6auxfao9B9PI+YMZrcEzerkIq2UTPcuv1mjc1M1iV4SbZ3zvSIx6hn050NgKsMdtAMpEryWK5G13sO4nKHdfPT9Xk48ho3pXjIM7SROUbfeRzGxZiFOQjZ+dwQHpM2RgIQnXEON/ZVGlTHdlNgP29V5zuMi98BGHEFb0gvbQlkWahim0UhxlVQGxw85J/GH00CJVow1tEGYwq+FdlBNhFfoabSZdrGzEoiyJtsi+/iHn0A74gY9bWOeKtpsQGuhiUTBSrhHQ27LERHlMbUm+uPEQWRyFmgYrTwqrG1yRPXGldnJlS7IxVPNZw6lKX8YhpZJ22BitGC0d/wahiAHtTNWjUrb3UrRO43jLpRskDFyCHnkZffK9+adacs55x1F1d86al8jwB9OYuqufM7bnQAwCUCU28GXQ77GwXoy2ksfsc9wHA6ZKFjd2MKm68N4fdSTHyZLTsd1rrY7ngRI90xRp2IP88HvEzJNsrPRibCmUX7jAOaX8gSvCJ0FTbHVBRTwkO/Lh3RjEc2Rd5PMTO1F+oP7PijLfwxcyopPX+CU9vzKg8IJ6kXUW4Jtx0XkvEv5d9pwxvFJXcGUZq/QZpbLmcFm3V+bHfr36jIV7WMlgb37xDndnXhhDWxuv9O4lhbn1Q8pr6XvIBrj6MTz/BvWDUmyn61Z5A/H3C97RU5HR/AR1lzWHuv12QPZy5os4SE3so7ccmnF9BdYOENZBddv0YtCeOc3i3jsJdn3GlE6ek+QHTkj9nFxEfVERFwRyuJJ7SE8nlWTU/uviSRKOH4Dp/uJ+OfSDdcdNkmu3BNoBy9tARfd9mY/MafbOCN4iW7wNE1aWsf2vsyHs791rE3Tn/ocy/qnw96LyeEiIDjwt7LSdiwCTkMh71is3sSDZ/4JYdkUZCH9DDFQ5Bex+NHP+gpKTFqg9DcRGxR9C9thlhFtNqx16T/NjFS8hNh8Lcm4jqdISAiZxs8QXrdVK0jg9J22qqpzbvxkFEHf2BXvKK4arK7KemmYdSnqSpaEbkQO8UwzbVh3EW9kJ41h/QMlaYl8N77ka7fo0z7uRsrbwfMuPWqsZv71HgINEV+f67e4kWIELaGRS8/BPpMw0/rZM6nsRqK1nrQJTi22mKoximfkzr1yebdDYEWe2n4OL6FiG4egzC6x4gIatP0/TRLTnOTd5PrjmVZVWVZjq47dXkzn5Is9a/gHlYIRXUwHm9HyJNT5smykQ9biRCbPdnUMKzrOgzJlnH/9gHckvPpmzcl7eQJtwvIB17bzHwF/PKvEDLNNGnGN7sskhR7Y5OEy/68hvkTka9Mn8BzvY9Kzx8JO17ZzeRwmaIoCWsSLs5O+fjF8CjF7eAuW3mTIHvALZxp+CHZvKH4eng3whbRcWQvfTLzH3dz4UtCPtm70mu/QjMIkG05RblochRF6EEfLP+4/IvFMigLx/oivSBGGGM7bonN0syXPgvT1NCNNA2z/kJUpFsVsU3+4r1T+B8zqEERlG5+cwAAAABJRU5ErkJggg=='


let initialState = {
  users: [
    {
      id: 1,
      name: "Dmitriy",
      followed: true,
      status: "boss",
      imgUrl: url,
      location: {
        city: "Minsk",
        country: "Belarus",
      },
    },
    {
      id: 2,
      name: "Sasha",
      followed: false,
      status: "boss",
            imgUrl: url,
      location: {
        city: "Moscow",
        country: "Russia",
      },
    },
    {
      id: 3,
      name: "Valera",
      status: "boss",
      imgUrl: url,

      followed: true,
      location: {
        city: "Kiev",
        country: "Ukraine",
      },
    },
    {
      id: 4,
      name: "Indira",
      followed: false,
      status: "boss",
      imgUrl: url,

      location: {
        city: "Almaty",
        country: "Karaganda",
      },
    },
  ],
};

export const usersReducer = (
  state: UsersPageType = initialState,
  action: UsersActionsTypes
) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((el) =>
          el.id === action.userId ? { ...el, followed: true } : el
        ),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((el) =>
          el.id === action.userId ? { ...el, followed: false } : el
        ),
      };
      case "SET-USERS":
        return { ...state, users: [...action.users, ...state.users] };
    default:
      return state;
  }
};

export type UsersActionsTypes =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>;

export const followAC = (userId: number) => {
  return {
    type: "FOLLOW",
    userId,
  } as const;
};
export const unfollowAC = (userId: number) => {
  return {
    type: "UNFOLLOW",
    userId,
  } as const;
};

export const setUsersAC = (users: UsersPropsType[]) => {
  return {
    type: "SET-USERS",
    users,
  } as const;
};

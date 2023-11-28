import savingsAndInvest1 from '@/assets/images/savingsandInvest1.jpeg';
import savingsAndInvest2 from '@/assets/images/savingsandInvest2.jpeg';
import savingsAndInvest3 from '@/assets/images/savingsandInvest3.jpeg';
import savingsAndInvest4 from '@/assets/images/savingsandInvest4.jpeg';
import endowment1 from '@/assets/images/endownment1.jpeg';
import endowment2 from '@/assets/images/endownment2.jpeg';
import endowment3 from '@/assets/images/endownment3.jpeg';
import protection1 from '@/assets/images/protection1.jpeg';
import protection2 from '@/assets/images/protection2.jpeg';
import protection3 from '@/assets/images/protection3.jpeg';
import protection4 from '@/assets/images/protection4.jpeg';
import annuities1 from '@/assets/images/annuities1.jpeg';
import annuities2 from '@/assets/images/annuities2.jpeg';
import annuities3 from '@/assets/images/annuities3.jpeg';
export const getQuoteData = [
    //product 1
    {
        productType: 'Saving and Investment',
        data: [
            {
                title: 'Capital Builder',
                desc: `<p className=' text-justify text-[14px] md:text-[18px] lg:text-[22px] font-normal text-[#DBDBDB] leading-7 md:leading-8 lg:leading-9'>The Custodian Capital Builder Plan is an investment product that<br/>allows the policyholder to determine the amount of regular<br/>contribution he wishes to periodically make. The policyholder is at<br/>liberty to select the level of life assurance benefit he wants.</p>`,
                img: savingsAndInvest1
            },
            {
                title: 'Esusu Shield',
                desc: `<p className=' text-justify text-[14px] md:text-[18px] lg:text-[22px] font-normal text-[#DBDBDB] leading-5 md:leading-6 lg:leading-9'>Esusu Shield uniquely combines features of Ajo, Esusu, Thrift and<br/>Mutual financing to meet the savings and financing needs, limited<br/>life assurance and personal accident benefits of policyholders.</p>`,
                img: savingsAndInvest2
            },
            {
                title: 'Personal Provident Plan',
                desc: `<p className=' text-justify text-[14px] md:text-[18px] lg:text-[22px] font-normal text-[#DBDBDB] leading-5 md:leading-6 lg:leading-9'>The plan is designed to provide guaranteed income for the self-<br/>employed and those who want to augment their retirement benefits.</p>`,
                img: savingsAndInvest3
            },
            {
                title: 'Investment Plus Plan',
                desc: `<p className=' text-justify text-[14px] md:text-[18px] lg:text-[22px] font-normal text-[#DBDBDB] leading-5 md:leading-6 lg:leading-9'>The plan is a combination of investment and protection.<br/>It provides protection up to age 60.</p>`,
                img: savingsAndInvest4 
            }
        ]
    },
    //product 2
    {
        productType: 'Endowment Policies',
        data: [
            {
                title: 'Education Endowment',
                desc: `<p className=' text-justify text-[14px] md:text-[18px] lg:text-[22px] font-normal text-[#DBDBDB] leading-5 md:leading-6 lg:leading-9'>The plan provides benefit for the payment of policyholder’s<br/>child school fees and other incidentals at any chosen level of his/her<br/>education – Primary, Secondary or Tertiary level. The policy<br/>guarantees the education of your child whether you are alive or<br/>otherwise to the tune of your sum assured.</p>`,
                img: endowment1,
            },
            {
                title: 'Life time harvest',
                desc: `<p className=' text-justify text-[14px] md:text-[18px] lg:text-[22px] font-normal text-[#DBDBDB] leading-5 md:leading-6 lg:leading-9'>The policy is an endowment assurance plan that pays out a<br/>percentage of the sum assured after a predetermined number of<br/>years has been completed. The policy also provides additional fatal<br/>accident benefit and medical expenses subject to a maximum of<br/>N500, 000 and N100, 000 respectively.</p>`,
                img: endowment2,
            },
            {
                title: 'Ordinary Endowment',
                desc: `<p className=' text-justify text-[14px] md:text-[18px] lg:text-[22px] font-normal text-[#DBDBDB] leading-5 md:leading-6 lg:leading-9'>This contract pays the guaranteed sum assured at maturity or at<br/>earlier death. Maximum age at entry is 60 years and additional fatal<br/>accident benefit of up to 100% is available.</p>`,
                img: endowment3
            }
        ]
    },
    //product 3
    {
        productType: 'Protection Policies',
        data: [
            {
                title: 'Term Assurance',
                desc: `<p className=' text-justify text-[14px] md:text-[18px] lg:text-[22px] font-normal text-[#DBDBDB] leading-5 md:leading-6 lg:leading-9'>Term assurance policy is the oldest and cheapest form of life<br/>assurance cover. It is designed to pay the guaranteed sum assured<br/>on death if this occurs within the term of the policy.<br/>Under this policy, nothing is payable if the life assured survives the term of the<br/>policy. It is purely a protection policy and does not attract surrender.<br/>It can be used to provide short period covers.</p>`,
                img: protection1, 
            },
            {
                title: 'Whole Life Assurance',
                desc: `<p className=' text-justify text-[14px] md:text-[18px] lg:text-[22px] font-normal text-[#DBDBDB] leading-5 md:leading-6 lg:leading-9'>This contract pays the guaranteed sum assured any time death<br/>occurs. Depending on the arrangement, premium payment may stop<br/>at age 60 or 65 while cover is still in force.</p>`,
                img: protection2
            },         
            {
                title: 'Custodian Dignity Plan',
                desc: `<p className=' text-justify text-[14px] md:text-[18px] lg:text-[22px] font-normal text-[#DBDBDB] leading-5 md:leading-6 lg:leading-9'>The Custodian Dignity plan is a joint life policy which pays the<br/>dignified lump sum (sum assured) on first death. The policy is<br/>unitized.</p>`,
                img: protection3
            },
            {
               title: 'Tuition Protection',
               desc: `<p className=' text-justify text-[14px] md:text-[18px] lg:text-[22px] font-normal text-[#DBDBDB] leading-5 md:leading-6 lg:leading-9'>The Custodian Tuition Protection plan is designed to guarantee the<br/>education of pupils and students in the event of death or total<br/>permanent disability as a result of accident of the parent/guardian/<br/>sponsor.</p>`,
               img: protection4,
            }
        ]
    },
    //product 4
    {
        productType: 'Annuities',
        data: [
            {
                title: 'Retiree Life Annuity',
                desc: `<p className=' text-justify text-[14px] md:text-[18px] lg:text-[22px] font-normal text-[#DBDBDB] leading-5 md:leading-6 lg:leading-9'>Custodian Retiree Life Annuity Plan is a series of regular monthly or<br/>quarterly payments made to a retiree (called an Annuitant) for the<br/>rest of his life upon payment of the purchase amount which is<br/>usually paid once.</p>`,
                img: annuities1, 
            },
            {
                title: 'Immediate Annuity',
                desc: `<p className=' text-justify text-[14px] md:text-[18px] lg:text-[22px] font-normal text-[#DBDBDB] leading-5 md:leading-6 lg:leading-9'>Immediate Annuity This is an annuity policy taken by an insured for<br/>the purpose of getting regular streams of future income. The annuity<br/>plan allows individuals to use lump sum deposit to buy annuity.</p>`,
                img: annuities2, 
            },
            {
                title: 'Deferred Annuity',
                desc: `<p className=' text-justify text-[14px] md:text-[18px] lg:text-[22px] font-normal text-[#DBDBDB] leading-5 md:leading-6 lg:leading-9'>This is an annuity policy taken by a proposer for the purpose of<br/>getting payments upon retirement or at some other specified future<br/>date. The annuity plan allows policy owners to save towards a<br/>deferred income.</p>`,
                img: annuities3, 
            }
        ]
    }
]
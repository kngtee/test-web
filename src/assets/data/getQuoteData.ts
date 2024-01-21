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
                desc: `The Custodian Capital Builder Plan is an investment product that allows the policyholder to determine the amount of regular contribution he wishes to periodically make. The policyholder is at liberty to select the level of life assurance benefit he wants.`,
                img: savingsAndInvest1
            },
            {
                title: 'Esusu Shield',
                desc: `Esusu Shield uniquely combines features of Ajo, Esusu, Thrift and Mutual financing to meet the savings and financing needs, limited life assurance and personal accident benefits of policyholders.`,
                img: savingsAndInvest2
            },
            {
                title: 'Personal Provident Plan',
                desc: `The plan is designed to provide guaranteed income for the self- employed and those who want to augment their retirement benefits.`,
                img: savingsAndInvest3
            },
            {
                title: 'Investment Plus Plan',
                desc: `The plan is a combination of investment and protection. It provides protection up to age 60.`,
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
                desc: `The plan provides benefit for the payment of policyholder’s child school fees and other incidentals at any chosen level of his/her education – Primary, Secondary or Tertiary level. The policy guarantees the education of your child whether you are alive or otherwise to the tune of your sum assured.`,
                img: endowment1,
            },
            {
                title: 'Life time harvest',
                desc: `The policy is an endowment assurance plan that pays out a percentage of the sum assured after a predetermined number of years has been completed. The policy also provides additional fatal accident benefit and medical expenses subject to a maximum of N500, 000 and N100, 000 respectively.`,
                img: endowment2,
            },
            {
                title: 'Ordinary Endowment',
                desc: `This contract pays the guaranteed sum assured at maturity or at earlier death. Maximum age at entry is 60 years and additional fatal accident benefit of up to 100% is available.`,
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
                desc: `Term assurance policy is the oldest and cheapest form of life assurance cover. It is designed to pay the guaranteed sum assured on death if this occurs within the term of the policy. Under this policy, nothing is payable if the life assured survives the term of the policy. It is purely a protection policy and does not attract surrender. It can be used to provide short period covers.`,
                img: protection1, 
            },
            {
                title: 'Whole Life Assurance',
                desc: `This contract pays the guaranteed sum assured any time death occurs. Depending on the arrangement, premium payment may stop at age 60 or 65 while cover is still in force.`,
                img: protection2
            },         
            {
                title: 'Custodian Dignity Plan',
                desc: `The Custodian Dignity plan is a joint life policy which pays the dignified lump sum (sum assured) on first death. The policy is unitized.`,
                img: protection3
            },
            {
               title: 'Tuition Protection',
               desc: `The Custodian Tuition Protection plan is designed to guarantee the education of pupils and students in the event of death or total permanent disability as a result of accident of the parent/guardian/ sponsor.`,
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
                desc: `Custodian Retiree Life Annuity Plan is a series of regular monthly or quarterly payments made to a retiree (called an Annuitant) for the rest of his life upon payment of the purchase amount which is usually paid once.`,
                img: annuities1, 
            },
            {
                title: 'Immediate Annuity',
                desc: `Immediate Annuity This is an annuity policy taken by an insured for the purpose of getting regular streams of future income. The annuity plan allows individuals to use lump sum deposit to buy annuity.`,
                img: annuities2, 
            },
            {
                title: 'Deferred Annuity',
                desc: `This is an annuity policy taken by a proposer for the purpose of getting payments upon retirement or at some other specified future date. The annuity plan allows policy owners to save towards a deferred income.`,
                img: annuities3, 
            }
        ]
    }
]
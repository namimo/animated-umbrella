<script setup lang="ts">
import Modal from "./Modal.vue"

const privacyAndPolicy = [
  {
    title: `What information do we collect?`,
    content: `The website collects your personal information such as your name, email address and
              country detail only if you choose to opt in for the giveaway. You can choose not
              to include some of the information requested, but some of it is required (usually name
              and email address as a minimum so that we can contact the winner.) You have the right
              to not provide the information requested or can simply not enter our giveaway if you
              do not wish to provide us with your personal information.`,
  },
  {
    title: `How is the information used?`,
    content: `The personal information we collect is used to contact you in the event that you are
              selected to win a prize from the giveaway, in addition to sending you special offers
              and other marketing material. You have the option to opt-out of receiving special
              offers and marketing material by unchecking the appropriate box when registering for
              the giveaway. If you do not opt-out, you may receive emails about sales or special
              offers no more than once per week. You can also opt-out of these emails within the
              footer of each email.`,
  },
  {
    title: `Is this information sold or shared?`,
    content: `We do not sell or otherwise share the information you provide to us via giveaway. This
              information is only used internally to compile anonymous statistics about our user
              base, to contact the winner and to create a contact list for sending special offers
              and marketing material.`,
  },
  {
    title: `How is the information secured?`,
    content: `The personal information we collect is secured behind SSL encryption and firewall
              technology where it is inaccessible to unauthorized parties.`,
  },
]

const officialRules = [
  {
    title: `To Enter`,
    content: `Beginning on Tuesday, Febraury 23rd 2021, through 23rd March 2021 on Tuesday, fill up a form which requires your name, email and country information and download Norton Secure VPN from the provided link to be automatically entered in the Iphone 12 Pro Giveaway. The app should not be deleted until the winner is selected and approached.<hr class="mb-1 border-transparent"/>No other methods of entry will be accepted. Limit: only one entry per person, email address and/or household will be accepted. All electronic entries must be received by 11:59:59 p.m. PST on Monday, August 27th, 2012. Entries become the property of Sponsor and will not be returned. Use of a false email account or an incorrect mail address will disqualify an entry. Sponsor is not responsible for technical, hardware or software malfunctions, lost or unavailable network connections, or failed, incorrect, inaccurate, incomplete, lost, late, misdirected, illegible, mutilated, postage-due, garbled or delayed entries or other communications or other technical problems related to website entries. Sponsor, in its sole discretion, reserves the right to disqualify any person who tampers with the entry process or the operation of the Site, or who otherwise violates these rules.  By entering, entrants accept and agree to abide by the terms of these Official Rules.`,
  },
  {
    title: `Eligibility`,
    content: `This Sweepstakes is only open to residents of the Austria, Germany and Switzerland, who are 13 years of age or older at time of entry. Employees of Rivuer, and its respective affiliates, subsidiaries, representatives, advertising, promotion and publicity agencies (“Sponsor and its agents”) and the immediate family members and persons living in the same household of each are not eligible. Sweepstakes is void where prohibited, restricted or taxed by law. All federal, state and local laws and regulations apply.`,
  },
  {
    title: `Prizes`,
    content: `There is only one prize . Odds of winning the prize depend on the number of eligible entries received in the Sweepstakes.<hr class="mb-1 border-transparent"/>Winner will receive one iPhone 12 Pro.  Approximate retail value of the prize is 1200$ USD as of 23rd Febraury, 2021.<hr class="mb-1 border-transparent"/>Prize is not transferable.  No substitution of prize for cash or other goods and services is permitted, except Sponsor reserves the right to provide a substitute prize of approximately equal or greater value, if the advertised prize becomes unavailable. All taxes, including, without limitation, all federal, state and local taxes, and international tariffs, are the sole responsibility of the individual winners.`,
  },
  {
    title: ` Winner Selection and Notification`,
    content: `Winners will be selected in a random drawing on or about September 27th, 2021, from all eligible entries received. The drawing will be conducted: Sponsor’s address as indicated in Section 6 of these rules, by Sponsor or its designee, the judge of the Sweepstakes, whose decisions are final and binding. Winners will be notified on or about September 28th 2021 by an email sent to the email address associated with the Demo registration or email entry.  If winner cannot be contacted at this email or mail address, is contacted and does not respond as directed within 14 days of attempted notification, refuses the prize or is ineligible to accept the prize, the prize may be forfeited and awarded to an alternate winner.  Winners may be required to complete and sign an Affidavit of Eligibility and, except where prohibited, Liability/Publicity Release, in the form provided by Sponsor, within 14 days of attempted notification in order to claim prize.  If a minor wins a prize, it will be awarded in the name of the minor’s parent or legal guardian, who will also be responsible for signing any necessary releases, consents and affidavits.   If a winner is 13 or older, as required, but a minor in his or her state of residence, winner’s parent or legal guardian will be required to sign all necessary documents. All prizes claimed in accordance with the Official Rules will be awarded. Winners may be required to provide a shipping address to claim prize. Allow 4-6 weeks for delivery of prize.`,
  },
  {
    title: `General Conditions`,
    content: `Sponsor and its agents are not in any way responsible or liable for damages, loss or injury resulting from entrants’ participation in this Sweepstakes or the acceptance, possession, shipping and handling, loss, use or mis-use of any prizes awarded in this Sweepstakes.  Entrants and winners assume sole liability for injuries, including personal injuries and/or damage to property, caused or claimed to be caused by participating in this Sweepstakes or the acceptance, possession, shipping and handling, loss, use or mis-use of any prize awarded.  Sponsor reserves the right to cancel, suspend and/or modify the Sweepstakes, or any part of it, if any fraud, technical failures, computer virus, bug, tampering, or any other factor impairs the integrity or proper functioning of the Sweepstakes, as determined by Sponsor in its sole discretion. Sponsor has the right to select winners from eligible entries at any time before the termination of the Sweepstakes. If terminated Sponsor may, in its sole discretion, determine the winners from among all non-suspect, eligible entries received up to time of such action.<hr class="mb-1 border-transparent"/>By entering this Sweepstakes, entrants agree (i) that Sponsor may post their entries on Sponsor’s website and in any and all publicity and advertising for Rivuer, this Sweepstakes or other promotions by Sponsor without any further attribution, notification or compensation to entrants and, except if entrant is a resident of TN or otherwise where prohibited by law, has the right to use the entrant’s user or screen name and hometown therewith; (ii) to be bound by these Official Rules and the decisions of the judges, and (iii) to be contacted by Sponsor or its agents by telephone, mail or email regarding the Sweepstakes. The Sweepstakes is governed by the laws of the United States and all claims must be resolved in the United States. If there is a dispute regarding the identity of an entrant, the entry will be deemed submitted by the person in whose name the email account is registered.`,
  },
  {
    title: `Winner Announcement`,
    content: `A winner information will be available at https://www.rivuer.com/winner after he/she is determined, verified and posted for approximately two weeks.`,
  },
  {
    title: `Sponsor`,
    content: `This Sweepstakes is sponsored by Rivuer itself.`,
  },
]
</script>

<template>
  <footer class="relative max-w-xl px-4 py-8 mx-auto">
    <div class="flex flex-col items-center text-sm text-white md:text-base">
      <p class="inline-flex items-center">
        <fa-solid:copyright class="mr-2" /> Copyright {{ new Date().getFullYear() }} - All Rights
        Reserved.
      </p>
      <div class="inline-flex mt-2 space-x-4 underline">
        <Modal>
          <template #button="{ toggle }">
            <button @click="toggle">Privacy And Policy</button>
          </template>

          <h2 class="pr-10 text-3xl text-gray-800 uppercase sm:text-4xl">Privacy And Policy</h2>
          <hr class="my-4" />
          <div class="flex flex-col space-y-6">
            <div class="space-y-2" v-for="p in privacyAndPolicy" :key="p?.title">
              <h3 class="text-2xl font-semibold text-gray-800">{{ p?.title }}</h3>
              <p class="leading-relaxed text-gray-700">
                {{ p?.content }}
              </p>
            </div>
          </div>

          <p class="mt-10 text-sm text-gray-400">
            If you have any questions or concerns, please contact us via the email address provided
            below.
          </p>
        </Modal>
        <Modal>
          <template #button="{ toggle }">
            <button @click="toggle">Prizes</button>
          </template>

          <h2 class="pr-10 text-3xl text-gray-800 uppercase sm:text-4xl">Prizes</h2>
          <hr class="my-4" />
          <p class="mt-6 text-gray-700">
            The winner of the giveaway will receive one iPhone 12 Pro. Value of $1200.
            Actual/appraised value may differ at time of prize reward. The specifics of the prize
            shall be solely determined by the owner of Rivuer. No cash or other prize substitution
            shall be permitted except at Rivuer's owner discretion. The prize is non transferable.
            Any and all prize-related expenses, including without limitation any and all federal,
            state, and/or local taxes, shall be the sole responsibility of the Winner. No
            substitution of prize or transfer/assignment of prize to others or request for the cash
            equivalent by Winner is permitted. Acceptance of prize constitutes permission for
            Rivuer's owner to use Winner's name, likeness, and entry for purposes of advertising and
            trade without further compensation, unless prohibited by law.
          </p>
        </Modal>
        <Modal>
          <template #button="{ toggle }">
            <button @click="toggle">Official Rules</button>
          </template>

          <h2 class="pr-10 text-3xl text-gray-800 uppercase sm:text-4xl">Official Rules</h2>
          <hr class="my-4" />
          <p class="mt-6 text-lg font-medium text-gray-900">
            NO PURCHASE NECESSARY. A PURCHASE DOES NOT INCREASE YOUR CHANCE OF WINNING. VOID WHERE
            PROHIBITED.
          </p>
          <p class="my-3 text-gray-700">
            This giveaway is not affiliated with or endorsed by Youtube without their consent and is
            consucted in a way that conflicts with their Privacy Policy, Terms of Service, or
            Community Guidelines
          </p>
          <div class="flex flex-col mt-6 space-y-6">
            <div class="space-y-2" v-for="o in officialRules" :key="o?.title">
              <h3 class="text-2xl font-semibold text-gray-800">{{ o?.title }}:</h3>
              <p class="leading-relaxed text-gray-700" v-html="o?.content" />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  </footer>
</template>

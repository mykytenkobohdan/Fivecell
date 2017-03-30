export function SkillsDirective() {
  'ngInject';
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/views/skills/skills.html',
    link: SkillsFunction
  }
}

function SkillsFunction() {
  'ngInject';

}
